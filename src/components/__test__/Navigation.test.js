import React from "react"
import { shallow } from "enzyme"
import Navigation from "../Navigation"
import * as Auth0 from "../../react-auth0-wrapper"
import { Link } from "react-router-dom"

it("<Navigation /> renders with 3 Link components", () => {
  jest.spyOn(Auth0, "useAuth0").mockImplementation(() => {
    return {
      isAuthenticated: false
    }
  })

  const wrapper = shallow(<Navigation />)

  expect(wrapper.find(Link).length).toBe(3)
})

it("<Navigation /> renders one button when isAuthenticated = false", () => {
  jest.spyOn(Auth0, "useAuth0").mockImplementation(() => {
    return{
      isAuthenticated: false
    }
  })

  const wrapper = shallow(<Navigation />)

  expect(wrapper.find("button").length).toBe(1)
})


it("<Navigation /> renders 4 Link components when isAuthenticated is true", () => {
  jest.spyOn(Auth0, "useAuth0").mockImplementation(() => {
    return{
      isAuthenticated:true
    }
  })

  const wrapper = shallow(<Navigation />)

  expect(wrapper.find(Link).length).toBe(4)
})

it("<Navigation /> renders 1 button with text 'Log out' when isAuthenticated = true", () => {
  jest.spyOn(Auth0, "useAuth0").mockImplementation(() => {
    return{
      isAuthenticated:true
    }
  })

  const wrapper = shallow(<Navigation />)

  expect(wrapper.find("button").length).toBe(1)
  expect(wrapper.find("button").html()).toMatch("Log out")
})




