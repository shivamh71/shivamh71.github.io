// http://shivamh71.github.io/sites

var sitesApp = angular.module("sitesApp", [])

var sites = [
  {
    "link" : "https://www.google.com",
    "desc" : "This link is for Google"
  },
  {
    "link" : "https://www.facebook.com",
    "desc" : "This link is for Facebook"
  },
  {
    "link" : "https://www.google.com",
    "desc" : "This link is for Google"
  },
  {
    "link" : "https://www.facebook.com",
    "desc" : "This link is for Facebook"
  },
  {
    "link" : "https://www.google.com",
    "desc" : "This link is for Google"
  },
  {
    "link" : "https://www.facebook.com",
    "desc" : "This link is for Facebook"
  },
  {
    "link" : "https://www.google.com",
    "desc" : "This link is for Google"
  },
  {
    "link" : "https://www.facebook.com",
    "desc" : "This link is for Facebook"
  },
  {
    "link" : "https://www.google.com",
    "desc" : "This link is for Google"
  },
  {
    "link" : "https://www.facebook.com",
    "desc" : "This link is for Facebook"
  }
]

sitesApp.controller("SitesController", function($scope){
  $scope.sites = sites
})

sitesApp.filter("searchFilter", function() {
  return function(input, searchString) {
    input = sites
    console.log(input)
    if (searchString == undefined || searchString == "") {
      return input
    }
    keys = searchString.split(" ")
    console.log(keys)
    var result = []
    for (item in input) {
      var ans = true
      for (k in keys) {
        if (keys[k].length > 0 && input[item].desc.toLowerCase().indexOf(keys[k].toLowerCase()) == -1) {
          console.log(input[item].desc + " || " + keys[k])
          ans = false
          break
        }
      }
      if (ans) {
        result.push(input[item])
      }
    }
    console.log(result)
    return result
  }
})
