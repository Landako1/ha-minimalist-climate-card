class MinimalistClimateCard extends HTMLElement {
  // Called when the user configures the card in the dashboard
  setConfig(config) {
    if (!config.temperature_entity || !config.humidity_entity) {
      throw new Error("You need to define 'temperature_entity' and 'humidity_entity'!");
    }
    
    this._config = config;

    // Build the underlying mini-graph-card configuration
    const miniGraphConfig = {
      type: "custom:mini-graph-card",
      entities: [
        {
          entity: config.temperature_entity,
          name: config.name_temp || "Temperature",
          show_state: true,
          color_thresholds: [{ value: 0, color: "#52ADF2" }]
        },
        {
          entity: config.humidity_entity,
          name: config.name_hum || "Humidity",
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

    // Create the HTML element for the mini-graph-card
    if (!this.graphCard) {
      this.graphCard = document.createElement("mini-graph-card");
    }
    
    // Pass the configuration
    this.graphCard.setConfig(miniGraphConfig);

    // Set the layout for our custom card
    this.innerHTML = "";
    const card = document.createElement("ha-card");
    card.style.overflow = "hidden"; // Prevent protruding corners
    card.appendChild(this.graphCard);
    this.appendChild(card);
  }

  // Home Assistant sends updated sensor data here
  set hass(hass) {
    if (this.graphCard) {
      this.graphCard.hass = hass; // Pass the data through
    }
  }

  // Tells Home Assistant the grid size of the card
  getCardSize() {
    return 3;
  }
}

// Register the new card in the system
customElements.define("minimalist-climate-card", MinimalistClimateCard);

// Add it to the custom cards list in the Home Assistant UI
window.customCards = window.customCards || [];
window.customCards.push({
  type: "minimalist-climate-card",
  name: "Minimalist Climate Card",
  preview: true,
  description: "An elegant climate card for temperature and humidity."
});
