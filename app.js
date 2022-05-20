// Datum formatieren ------------------------------------
// Default Datum Formatierung - Browser Locale
console.log(new Date().toLocaleString());

// Explizit andere Locale übergeben
console.log(new Date().toLocaleString("en-US"));
console.log(new Date().toLocaleString("en-GB"));
console.log(new Date().toLocaleString("ar-EG"));

// Einzelne Segemente einstellen
console.log(
  new Date().toLocaleString("de-DE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  })
);

// Stil einstellen
console.log(
  new Date().toLocaleString("de-DE", {
    dateStyle: "full",
  })
);

console.log(
  new Date().toLocaleString("de-DE", {
    dateStyle: "full",
    timeStyle: "full",
  })
);

// Kalender einstellen
console.log(
  new Date().toLocaleString("de-DE", {
    calendar: "japanese",
  })
);

// Zeitspanne ausgeben
console.log(
  new Date().toLocaleString("de-DE", {
    dayPeriod: "long",
  })
);

// Zahlen formatieren
console.log((1500000).toLocaleString());
console.log((1500000).toLocaleString("ar-EG"));
console.log(
  (20).toLocaleString("de-DE", { style: "currency", currency: "EUR" })
);
console.log(
  (20).toLocaleString("de-DE", { style: "currency", currency: "USD" })
);
console.log(
  (20).toLocaleString("en-US", { style: "currency", currency: "USD" })
);
console.log(
  (20).toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    currencyDisplay: "name",
  })
);
console.log((0.75).toLocaleString("de-DE", { style: "percent" }));
console.log((100).toLocaleString("de-DE", { style: "unit", unit: "liter" }));

console.log((1500000).toLocaleString("en-US", { notation: "compact" }));
console.log((10000).toLocaleString("en-US", { notation: "compact" }));
console.log((10000).toLocaleString("en-US", { notation: "scientific" }));
