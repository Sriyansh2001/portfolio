import React, { useEffect, useRef, useState } from "react";
import "./terminal.scss";
import { DESKTOP_ICONS, TERMINAL_COMMANDS } from "constants/constants";
import { isValidDesktopIcon, equalsIgnoreCase } from "Utilities/utilities";
import { useTaskContext } from "context/TaskContext";
import { HistoryItem } from "types/types";

const STARTUP_LINES = [
  "sriyansh-x86_64-linux v1.0.0",
  "Welcome to the sriyansh development console.",
  "Type 'open {app}' to open an app, 'close' to close terminal.",
  "You can also execute one-line JavaScript expressions (example: 2+2 or Math.max(1,2)).",
];

export default function Terminal() {
  const { setDesktopIcon } = useTaskContext();
  const [history, setHistory] = useState<HistoryItem[]>(() =>
    STARTUP_LINES.map((t, i) => ({ id: i, kind: "system", text: t })),
  );
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(STARTUP_LINES.length);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    // scroll to bottom when history changes
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [history]);

  const push = (kind: HistoryItem["kind"], text: string) => {
    setHistory((h) => [...h, { id: counter, kind, text }]);
    setCounter((c) => c + 1);
  };

  const handleCommand = (raw: string) => {
    const cmd = raw.trim();
    if (!cmd) return;
    push("input", cmd);

    const parts = cmd.split(" ");
    const [verb, ...args] = parts;

    if (equalsIgnoreCase(verb, TERMINAL_COMMANDS.OPEN)) {
      const target = args[0];
      if (!target) {
        push("error", "Usage: open {app}");
        return;
      }

      const valid = isValidDesktopIcon(target);
      if (valid) {
        // find the exact key from DESKTOP_ICONS to ensure correct casing
        const actual = Object.values(DESKTOP_ICONS).find(
          (v) => v.toLowerCase() === target.toLowerCase(),
        );
        if (actual) {
          setDesktopIcon(actual, true);
          push("output", `Opening ${actual}...`);
        }
      } else {
        push("error", `Unknown app: ${target}`);
      }

      return;
    }

    if (equalsIgnoreCase(verb, TERMINAL_COMMANDS.CLOSE)) {
      const targert = args[0];
      if (targert && isValidDesktopIcon(targert)) {
        // normalize casing
        const actual = Object.values(DESKTOP_ICONS).find(
          (v) => v.toLowerCase() === targert.toLowerCase(),
        );
        if (actual) {
          setDesktopIcon(actual, false);
          push("output", `Closing ${actual}...`);
          return;
        }
        push("error", `Unknown app: ${targert}`);
        return;
      } else if(targert) {
        push("error", `Unknown app: ${targert}`);
        return;
      }

      push("output", "Terminal closing...");
      setTimeout(() => {
        setDesktopIcon(DESKTOP_ICONS.TERMINAL, false);
        inputRef.current?.focus();
      }, 1000);
      return;
    }

    if (equalsIgnoreCase(verb, TERMINAL_COMMANDS.HELP)) {
      push(
        "output",
        "Available commands: 'open {app}', 'close', 'clear', 'help', and any one-line JavaScript expression.",
      );
      return;
    }

    if (equalsIgnoreCase(verb, TERMINAL_COMMANDS.CLEAR)) {
      setHistory([]);
      return;
    }

    // If not a built-in command, try to evaluate as JS expression
    try {
      // Evaluate one-line JS expression safely-ish
      // eslint-disable-next-line no-new-func
      const fn = new Function(`return (${cmd})`);
      const result = fn();
      push("output", String(result));
    } catch (err: any) {
      push("error", `Error: ${err?.message || String(err)}`);
    }
  };

  const onSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    handleCommand(input);
    setInput("");
  };

  return (
    <div className="terminal-root">
      <div className="terminal-history" ref={containerRef}>
        {history.map((h) => (
          <div key={h.id} className={`terminal-line terminal-${h.kind}`}>
            {h.kind === "input" ? (
              <span className="prompt">sriyansh@x86:~$</span>
            ) : null}
            <span className="terminal-text">{h.text}</span>
          </div>
        ))}
      </div>

      <form className="terminal-input-row" onSubmit={onSubmit}>
        <label className="prompt">sriyansh@x86:~$</label>
        <input
          ref={inputRef}
          className="terminal-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if(e.key === "Enter") {
              onSubmit();
            }
            if (e.key === "ArrowUp") {
              // optional: recall last command
              const lastInput = history
                .slice()
                .reverse()
                .find((h) => h.kind === "input");
              if (lastInput) setInput(lastInput.text);
            }
          }}
          autoComplete="off"
        />
      </form>
    </div>
  );
}
