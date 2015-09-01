import jsdom from 'mocha-jsdom'
import { expect } from 'chai'
import React from 'react/addons'

import Search from '../src/components/search'

const TestUtils = React.addons.TestUtils

describe('Search test', () => {
  jsdom()

  it('Initial state', () => {

    let search = TestUtils.renderIntoDocument(<Search/>)
    expect(search).to.be.defined

    let searchTerm = React.findDOMNode(search.refs.searchTerm)
    expect(searchTerm).to.be.defined
    expect(searchTerm.value).to.equal('')
  })
})