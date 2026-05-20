# 🌡️ Minimalist Climate Card for Home Assistant

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg?style=for-the-badge)](https://github.com/hacs/integration)

A sleek, space-saving custom card for Home Assistant to display temperature and humidity in a single, seamless graph. No complex YAML required anymore! 

**Created with ❤️ by Landako1. If you like this card, please ⭐ the repository!**

## 📸 Preview

| Light Mode | Dark Mode |
| :---: | :---: |
| ![Light Mode](images/preview_light.png) | ![Dark Mode](images/preview_dark.png) |

---

## ✨ Features
- **Plug & Play:** Just provide two sensors, the card handles the rest.
- **Dual Y-Axis:** Independent scales for Temperature (left) and Humidity (right).
- **Mold Prevention:** Visual color thresholds for humidity (Green = Healthy, Yellow = Warning, Red = High Risk).
- **Built-in Styling:** No need for `card-mod` or `stack-in-card`. Seamless borders and shadows are handled internally.

---

## ⚠️ Prerequisites
Since this card acts as a beautiful wrapper, you **must** have the following card installed via HACS first:
* [mini-graph-card](https://github.com/kalkih/mini-graph-card)

---

## 🚀 Installation

### Option 1: HACS (Recommended)

Click the button below to add this repository directly to your HACS:

[![Open your Home Assistant instance and open a repository inside the Home Assistant Community Store.](https://my.home-assistant.io/badges/hacs_repository.svg)](https://my.home-assistant.io/redirect/hacs_repository/?owner=Landako1&repository=ha-minimalist-climate-card&category=plugin)

**Manual HACS Steps (if the button doesn't work):**
1. Open **HACS** -> **Frontend** (or **Dashboards**).
2. Click the **three dots** in the top right corner -> **Custom repositories**.
3. Add the URL: `https://github.com/Landako1/ha-minimalist-climate-card`
4. Select **Dashboard** as the category.
5. Click **Add** and then **Download**.

---

## 🛠️ Usage

Once installed, go to your dashboard, click **Edit Dashboard** -> **Add Card** -> **Manual**, and paste the following configuration. 

You only need to define your sensors – everything else is completely optional!

```yaml
type: custom:minimalist-climate-card

# --- REQUIRED ---
temperature_entity: sensor.YOUR_TEMPERATURE_SENSOR
humidity_entity: sensor.YOUR_HUMIDITY_SENSOR

# --- OPTIONAL ---
name_temp: Temp       # Custom name for temperature
name_hum: Hum         # Custom name for humidity
hours_to_show: 48     # Graph history in hours (default is 24)
height: 100           # Adjust the height of the graph (default is 70)
```
## 📄 License
This project is released under the **MIT License**.
