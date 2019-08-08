import React from "react"
import { shallow } from "enzyme"
import ProductsList from "../ProductsList"
import Loader from "../Loader"
import ProductCard from "../ProductsList/ProductCard"

describe("<ProductsList /> functionality", () => {
  describe("Initial component render", () => {
    let wrapper 
    const spyDidMount = jest.spyOn(ProductsList.prototype, "componentDidMount")

    beforeEach(() => {
      wrapper = shallow(<ProductsList />)
    })

    afterEach(() => {
      spyDidMount.mockReset()
    })

    afterAll(() => {
      spyDidMount.mockRestore()
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

    it("renders a header", () => {
      expect(wrapper.find("header").length).toBe(1)
    })
  })
  
  describe("render after data is fetched", () => {
    let wrapper 
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        status: 200,
        json: () => {
          return Promise.resolve({
            products: [{ id: 1, name: "thing"}, { id: 2, name: "thing2"}]
          })
        }
      })
    })

    beforeEach(() => {
      wrapper = shallow(<ProductsList />)
    })

    it("does not renders a <Loader /> if no data is fetched", () => {
      expect(wrapper.find(Loader).length).toBe(0)
    })

    it("renders <ProductCard /> component", () => {
      expect(wrapper.find(ProductCard).length).toBe(2)
    })

    it("renders a header", () => {
      expect(wrapper.find("header").length).toBe(1)
    })

    it("has a loaded property in state set to true", () => {
      expect(wrapper.state('isLoaded')).toBe(true)
    })

    it("has an array of products on state", () => {
      expect(wrapper.state("products").length).toBe(2)
    })

  })

})