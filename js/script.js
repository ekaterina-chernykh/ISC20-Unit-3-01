// Copyright (c) 2022 Ekaterina All rights reserved
//
// Created by: Ekaterina
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ISC20-Unit-3-01/sw.js", {
    scope: "/ISC20-Unit-3-01/",
  })
}

/**
 * This function displays an alert.
 */
function myButtonClicked() {
  // input
  const base_a = parseFloat(document.getElementById("base-a").value)
  const base_b = parseFloat(document.getElementById("base-b").value)
  const height = parseFloat(document.getElementById("height").value)

  // process
  const area = [(base_a + base_b) / 2] * height

  // output
  document.getElementById("area").innerHTML = "Area is: " + area + "mm²"
}
