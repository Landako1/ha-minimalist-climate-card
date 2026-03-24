class LandakoClimateCard extends HTMLElement {
  // Wird aufgerufen, wenn der Nutzer die Karte im Dashboard konfiguriert
  setConfig(config) {
    if (!config.temperature_entity || !config.humidity_entity) {
      throw new Error("Du musst 'temperature_entity' und 'humidity_entity' angeben!");
    }
    
    this._config = config;

    // Hier bauen wir im Hintergrund deinen komplexen YAML-Code nach!
    const miniGraphConfig = {
      type: "custom:mini-graph-card",
      entities: [
        {
          entity: config.temperature_entity,
          name: config.name_temp || "Temperatur",
          show_state: true,
          color_thresholds: [{ value: 0, color: "#52ADF2" }]
        },
        {
          entity: config.humidity_entity,
          name: config.name_hum || "Feuchtigkeit",
          show_state: true,
          y_axis: "secondary",
          color_thresholds: [
            { value: 0, color: "#76E233" },
            { value: 55, color: "#f4b400" },
            { value: 60, color: "#ff4444" }
          ]
        }
      ],
      height: config.height || 70,
      line_width: 3,
      hours_to_show: config.hours_to_show || 24,
      smoothing: true,
      animate: true,
      color_thresholds_mode: "each",
      show: { fill: "fade", icon: false, name: true, state: true, legend: false },
      style: "ha-card { border: none; box-shadow: none; margin: 0; padding: 0; }" 
    };

    // Erstelle das HTML-Element für die mini-graph-card
    if (!this.graphCard) {
      this.graphCard = document.createElement("mini-graph-card");
    }
    
    // Übergebe die Konfiguration
    this.graphCard.setConfig(miniGraphConfig);

    // Setze das Layout unserer eigenen Karte (ersetzt die stack-in-card!)
    this.innerHTML = "";
    const card = document.createElement("ha-card");
    card.style.overflow = "hidden"; // Verhindert überstehende Ecken
    card.appendChild(this.graphCard);
    this.appendChild(card);
  }

  // Home Assistant sendet jede Sekunde neue Sensor-Daten hierhin
  set hass(hass) {
    if (this.graphCard) {
      this.graphCard.hass = hass; // Wir reichen die Daten einfach durch
    }
  }

  // Teilt Home Assistant mit, wie groß die Karte im Raster ist
  getCardSize() {
    return 3;
  }
}

// Registriere die neue Karte im System
customElements.define("landako-climate-card", LandakoClimateCard);

// Füge sie der Auswahl in der Home Assistant UI hinzu (damit sie im Menü auftaucht!)
window.customCards = window.customCards || [];
window.customCards.push({
  type: "landako-climate-card",
  name: "Landako Climate Card",
  preview: true,
  description: "Eine elegante Klima-Karte für Temperatur und Luftfeuchtigkeit."
});
