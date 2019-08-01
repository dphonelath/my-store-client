import React from "react"
import { shallow } from "enzyme"
import Navigation from "../Navigation"
import * as Auth0 from "../../react-auth0-wrapper"

it("<Navigation /> renders with crashing", () => {
  jest.spyOn(Auth0, 'useAuth0').mockImplementation(() => {
    return {
      isAuthenticated: false
    }
  })
  
  const wrapper = shallow(<Navigation />)
})





