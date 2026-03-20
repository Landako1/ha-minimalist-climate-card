# 🌡️ Minimalist Climate Stack Card for Home Assistant

A sleek, space-saving dashboard card to display temperature and humidity in a single, seamless graph. This design removes borders and padding to provide a clean, modern look for your Home Assistant UI.

## 📸 Preview

Visual feedback is key. This card features dynamic color thresholds to help you monitor your home's climate at a glance.

| Light Mode | Dark Mode |
| --- | --- |
| ![Light Mode](images/preview_light.png) | ![Dark Mode](images/preview_dark.png) |

---

## ✨ Features
- **Seamless Integration:** Uses `stack-in-card` to merge elements without visible borders.
- **Dual Y-Axis:** Independent scales for Temperature (left) and Humidity (right).
- **Mold Prevention:** The humidity line changes color automatically:
  - 🟢 **Green:** Healthy (< 55%)
  - 🟡 **Yellow:** Warning (55% - 60%)
  - 🔴 **Red:** High Risk (> 60%)
- **Modern Aesthetics:** Features smooth curves, faded fills, and a minimalist layout.

## 🛠️ Requirements
This card requires the following frontend plugins, available via **HACS**:
1. [stack-in-card](https://github.com/custom-cards/stack-in-card)
2. [mini-graph-card](https://github.com/kalkih/mini-graph-card)
3. [card-mod](https://github.com/thomasloven/lovelace-card-mod)

## 🚀 Installation

1. **Copy the Code:** Open the `climate-card.yaml` file in this repository and copy the content.
2. **Add to Dashboard:**
   - Go to your Home Assistant Dashboard.
   - Click **Edit Dashboard** -> **Add Card** -> **Manual**.
3. **Configure Entities:** Paste the code and replace the placeholders with your actual sensor IDs:
   - `sensor.YOUR_TEMPERATURE_SENSOR`
   - `sensor.YOUR_HUMIDITY_SENSOR`

## ⚙️ Customization
You can easily adjust the `height`, `hours_to_show` (default is 24), or the `color_thresholds` within the YAML file to match your personal preference or local climate needs.

---
*If you find this useful, please consider giving this repository a ⭐!*
