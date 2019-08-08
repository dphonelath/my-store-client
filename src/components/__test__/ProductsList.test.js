import React from "react"
import { shallow } from "enzyme"
import ProductsList from "../ProductsList"

import Loader from "../Loader"

describe("<ProductsList /> functionality", () => {
  const spyDidMount = jest.spyOn(ProductsList.prototype, "componentDidMount")

  it("calls componentDidMount", () => {
    const wrapper = shallow(<ProductsList />)
    expect(spyDidMount).toHaveBeenCalledTimes(1)
  })

  it("renders without crashing", () => {
    const wrapper = shallow(<ProductsList />)
  })

  it("renders a <Loader /> if no data is fetched", () => {
    const wrapper = shallow(<ProductsList />)

    expect(wrapper.find(Loader).length).toBe(1)
  })
})