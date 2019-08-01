import React from "react"
import App from "../../App"
import { shallow } from "enzyme"

import { Route } from "react-dom"

it("my first test", () => {
  const isTrue = true
  expect(isTrue).toBe(true)
}) 

it("<App /> renders without crashing", () => {
  const wrapper = shallow(<App />)
})

it("<App /> has 6 Route child components", () => {
  const wrapper = shallow(<App />)
})