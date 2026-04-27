export function createStore(initialState = {}) {
  let state = structuredCloneSafe(initialState);
  const listeners = new Set();
  return {
    getState() { return state; },
    setState(patch) {
      state = { ...state, ...(typeof patch === 'function' ? patch(state) : patch) };
      listeners.forEach(fn => fn(state));
      return state;
    },
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    }
  };
}

export function toggleInSet(setLike, value) {
  const next = new Set(setLike || []);
  if (next.has(value)) next.delete(value);
  else next.add(value);
  return next;
}

export function radioSelect(options, selectedValue) {
  return options.map(opt => ({ ...opt, selected: opt.value === selectedValue }));
}

function structuredCloneSafe(value) {
  try { return structuredClone(value); }
  catch { return JSON.parse(JSON.stringify(value)); }
}
