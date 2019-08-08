import React from "react"
import { shallow } from "enzyme"
import ProductsList from "../ProductsList"

import Loader from "../Loader"

describe("<ProductsList /> functionality", () => {
  let wrapper 
  const spyDidMount = jest.spyOn(ProductsList.prototype, "componentDidMount")

  beforeEach(() => {
    wrapper = shallow(<ProductsList />)
  })

  afterEach(() => {
    spyDidMount.mockReset()
  })

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy()
  })

  it("calls componentDidMount 1 time", () => {
    expect(spyDidMount).toHaveBeenCalledTimes(1)
  })

  it("renders a <Loader /> if no data is fetched", () => {
    expect(wrapper.find(Loader).length).toBe(1)
  })

  it("has an isLoaded property on state that = false", () => {
    expect(wrapper.state('isLoaded')).toBe(false)
  })

  it("has an empty products array on state", () => {
      expect(wrapper.state('products').length).toBe(0)
  })
})