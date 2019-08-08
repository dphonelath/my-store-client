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

  it("calls componentDidMount", () => {
    expect(spyDidMount).toHaveBeenCalledTimes(1)
  })

  it("renders without crashing", () => {
    expect(wrapper).toBeTruthy()
  })

  it("renders a <Loader /> if no data is fetched", () => {
    expect(wrapper.find(Loader).length).toBe(1)
  })
})