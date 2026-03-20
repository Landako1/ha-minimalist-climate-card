# 🌡️ Minimalist Climate Stack Card for Home Assistant

A sleek, space-saving dashboard card to display temperature and humidity in a single, seamless graph. This design uses a layered approach to remove borders and provide a clean, modern look for your Home Assistant UI.

## ✨ Features
- **Seamless Integration:** Uses `stack-in-card` to merge elements without visible borders or padding.
- **Dual Y-Axis:** Independent scales for Temperature (left) and Humidity (right).
- **Visual Feedback:** Dynamic color thresholds that change based on humidity levels (ideal for mold prevention awareness).
- **Responsive Design:** Optimized for both mobile and wall-mounted tablet dashboards.

## 📸 Preview
*(Tip: Add a screenshot of your card here! Upload it to an `images` folder in your repo and link it like this: `![Preview](images/preview.png)`)*

## 🛠️ Requirements
This card requires the following frontend plugins, all available via **HACS**:
1. [stack-in-card](https://github.com/custom-cards/stack-in-card)
2. [mini-graph-card](https://github.com/kalkih/mini-graph-card)
3. [card-mod](https://github.com/thomasloven/lovelace-card-mod)

## 🚀 Installation & Usage

1. **Download the code:** Open the `climate-card.yaml` file in this repository.
2. **Add to Dashboard:** - Go to your Home Assistant Dashboard.
   - Click "Edit Dashboard" -> "Add Card" -> "Manual".
3. **Paste & Edit:** Paste the code and replace the following placeholder entities with your own:
   - `sensor.YOUR_TEMPERATURE_SENSOR`
   - `sensor.YOUR_HUMIDITY_SENSOR`

## ⚙️ Configuration Details
- **Hours to show:** Default is 24h.
- **Humidity Thresholds:** - `< 55%`: Green (Healthy)
  - `55% - 60%`: Yellow (Warning)
  - `> 60%`: Red (High risk of mold)

---
*If you like this design, feel free to ⭐ this repository!*
