const PII_PATTERNS = Object.freeze([
  // Czech/Slovak rodné číslo variants and compact long IDs.
  /\b\d{2,6}\/?\d{3,4}\b/,
  /\b\d{8,12}\b/,
  // E-mail and phone numbers (CZ/SK/UA plus generic 9+ digits with separators).
  /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i,
  /(?:\+?420|\+?421|\+?380)?[\s.-]*(?:\d[\s.-]*){9,}/,
  // Dates commonly used in DOB and clinical forms.
  /\b\d{1,2}[.\/-]\d{1,2}[.\/-]\d{2,4}\b/,
  /\b(?:nar\.?|narozen(?:í|a)?|datum\s+narozen[íi]|дата\s+народження|д\.\s*н\.?|born|dob)\b/i,
  // Names, addresses, insurance, patient identifiers in UA/CZ/EN.
  /\b(?:pacient(?:ka)?|patient|пацієнт(?:ка)?|пациент|rodné\s+číslo|r\.č\.|pojištěn(?:ec|í)?|pojišťovna|страхов(?:ка|ий)|insurance|VZP|jméno|příjmení|ім['’]?я|прізвище|surname|address|adresa|адреса)\b/i,
  // Likely full names: two or three capitalized words in Latin/Cyrillic.
  /\b[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽІЇЄҐА-Я][a-záčďéěíňóřšťúůýžіїєґа-я'’\-]{2,}\s+[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽІЇЄҐА-Я][a-záčďéěíňóřšťúůýžіїєґа-я'’\-]{2,}(?:\s+[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽІЇЄҐА-Я][a-záčďéěíňóřšťúůýžіїєґа-я'’\-]{2,})?\b/,
  // Patient-like filenames: Ivanov_1985_OPG.pdf, Петренко-1991-КТ.dcm, etc.
  /[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽІЇЄҐА-Я][\wÁČĎÉĚÍŇÓŘŠŤÚŮÝŽІЇЄҐа-яіїєґ'’\-]{2,}[_\-\s]*(?:19|20)\d{2}[_\-\s]*(?:opg|rtg|cbct|ct|кт|знімок|scan|photo|foto)/i
]);

export function detectPotentialPII(text) {
  const s = String(text || '');
  return PII_PATTERNS.some(re => re.test(s));
}

export function listPotentialPIIMatches(text) {
  const s = String(text || '');
  return PII_PATTERNS
    .map(re => s.match(re)?.[0])
    .filter(Boolean)
    .slice(0, 8);
}
