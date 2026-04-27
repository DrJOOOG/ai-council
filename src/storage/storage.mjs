export function estimateLocalStorageBytes(storageLike) {
  let total = 0;
  for (let i = 0; i < storageLike.length; i++) {
    const key = storageLike.key(i) || '';
    const value = storageLike.getItem(key) || '';
    total += (key.length + value.length) * 2;
  }
  return total;
}

export function estimateAfterSet(storageLike, key, value) {
  const current = storageLike.getItem(key) || '';
  return estimateLocalStorageBytes(storageLike) - ((key.length + current.length) * 2) + ((key.length + String(value).length) * 2);
}

export function makePendingRequest({ chatId, userMsgId, text, mode, participants }) {
  return {
    id: cryptoRandomId(),
    chatId,
    userMsgId,
    text: String(text || ''),
    mode: mode || 'single',
    participants: participants || [],
    startedAt: Date.now(),
    status: 'running',
    visibilityRisk: false
  };
}

function cryptoRandomId() {
  if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  return 'id_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
}
