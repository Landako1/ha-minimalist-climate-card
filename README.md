# 🌡️ Minimalist Climate Stack Card for Home Assistant

A sleek, space-saving dashboard card to display temperature and humidity in a single, seamless graph. Designed by **Landako1**.

## 📸 Preview

| Light Mode | Dark Mode |
| --- | --- |
| ![Light Mode](images/preview_light.png) | ![Dark Mode](images/preview_dark.png) |

---

## ✨ Features
- **Seamless Integration:** Uses `stack-in-card` to merge elements without visible borders.
- **Dual Y-Axis:** Independent scales for Temperature (left) and Humidity (right).
- **Mold Prevention:** Visual color thresholds for humidity.
- **Modern Aesthetics:** Features smooth curves and faded fills.

## 🛠️ Requirements
This card requires the following frontend plugins from **HACS**:
1. [stack-in-card](https://github.com/custom-cards/stack-in-card)
2. [mini-graph-card](https://github.com/kalkih/mini-graph-card)
3. [card-mod](https://github.com/thomasloven/lovelace-card-mod)

## 🚀 Installation & Usage

### Option 1: HACS (Recommended)
1. Open **HACS** -> **Frontend**.
2. Click the **three dots** (top right) -> **Custom repositories**.
3. Repository: `https://github.com/Landako1/ha-minimalist-climate-card`
4. Category: **Dashboard**.
5. Click **Add** and then **Install**.

### Option 2: Manual
1. Copy the code from `climate-card.yaml`.
2. Add a **Manual Card** to your dashboard and paste the code.
3. Replace the sensor entities with your own.

---
*Created with ❤️ by Landako1. If you like this, please ⭐ the repo!*
