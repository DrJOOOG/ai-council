// Focused clinical helpers used by unit tests and mirrored in app.js until full ES-module migration.
export function extractDoctorCorrectionsFromMessages(messages = []) {
  if (!Array.isArray(messages)) return '';
  const correctionRe = /(?:(?:не|ні|not)\s*(?:це\s*)?.{0,18}[1-4][1-8]|замість.{0,24}[1-4][1-8]|instead\s+of.{0,24}[1-4][1-8]|(?:імплант|implant|зуб|tooth|правильно|це|this\s+is)\s*(?:№\s*)?[1-4][1-8]|(?:корекц|виправ|помил|помилка).{0,60}(?:[1-4][1-8]|сторон|left|right|ліва|права)|(?:сторона|ліва|права|left|right).{0,40}[1-4][1-8])/i;
  return messages
    .filter(m => m?.role === 'user' && typeof m.content === 'string' && correctionRe.test(m.content))
    .slice(-8)
    .map(m => '- ' + m.content.trim().replace(/\s+/g, ' ').slice(0, 700))
    .join('\n');
}

export function hasDoctorCorrection(text = '') {
  return !!extractDoctorCorrectionsFromMessages([{ role: 'user', content: String(text || '') }]);
}
