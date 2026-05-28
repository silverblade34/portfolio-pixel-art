'use client';

import React, { useState, useEffect, useRef } from 'react';

const TERMINAL_MESSAGES = [
  'Siempre aprendiendo. Siempre construyendo. Siempre mejorando.',
  'root@marcos-pacheco:~$ full-stack --mode=pro --cloud=aws --lang=typescript',
  'Construyendo el futuro, un microservicio a la vez.',
  'root@marcos-pacheco:~$ git push origin main --force-with-lease',
];

export function TerminalTyping() {
  const [msgIdx, setMsgIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [charIdx, setCharIdx] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const msg = TERMINAL_MESSAGES[msgIdx];
    if (charIdx < msg.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(msg.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      }, 36);
    } else {
      timeoutRef.current = setTimeout(() => {
        setMsgIdx(i => (i + 1) % TERMINAL_MESSAGES.length);
        setDisplayed('');
        setCharIdx(0);
      }, 3000);
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [charIdx, msgIdx]);

  return (
    <footer className="terminal-footer">
      <span className="terminal-prompt">❯ marcos@portfolio:~$</span>
      <span className="terminal-text">{displayed}</span>
      <span className="terminal-cursor" />
    </footer>
  );
}
