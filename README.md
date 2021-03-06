Google Maps API Highlights
---------------------------

Full Documentation for the Google Maps API is  available at https://developers.google.com/maps/.

In getting to know the Google Maps API, there are a couple of things to be aware of:

1. v3 of the API has a new endpoint- check out the documentation
2. api key easy to obtain. Just follow the instructions on the getting stated page.


The google api layout contains 4 sections

1. Andoid
2. i0S
3. JS
4. HTTP (Web Services)

JS and Web Services have sub-directories:

    JS             WEB SERICES

    Embed API      Directions API
    Static API     Distance Matrix API
    StreetView API Elevation API
                   Geocoding API
                   Geolocation API
                   Roads API
                   Time Zone API
                   Places API Web Service

The JS Embed API I used organizes the features in the following sections:

EMBED API
--------------------
- Authentication
- Creating a Map
- Drawing on the Map
- Displaying Data
- Services
- Libraries

It's presented in a clear layout with code samples and lots of conversation on stack overflow if you get stuck.

The api is huge and encompases hundreds of features and constructors, so for my project I focused on the JS API and used features that aren't presened in the default version at google.maps.com

GETTING STARTED
----------------

*Async Defer & libraries*

The html setup includes this nifty thing called async defer, which allows your webpage to load while the api calls are being completed. This makes your website load faster.


  <pre><code>async defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAsXfVkwp715Ql0SM_qrs5dFJ-PhAetqYs&callback=initMap&libraries=geometry,visualization"></code></pre>


**Chaining libraries**

you'll probably be using more than one API library, so google allows you to chan them togeter in your script tag like this:


<pre><code>libraries=geometry, visualization</code></pre>

**Loading the map**

The map and it’s features are loaded via a callback function called initMap() - it must be designated in your script in the HTML like this:


<pre><code>callback=initMap</code></pre>

------------------------------------------------------------------------

Once you've selected the features you want to add to your map, you'll be instatniating an object from one of Google's Contructor functions provided in the API. Here's an example:

Be sure to pay attention to any properties that wil be required for that Object.

<pre><code>
  var infowindow = new google.maps.InfoWindow({
              content: distanceContent
          });
</code></pre>

-------------------------------------------------------------------------
Finally, there is a great index of all constructor functions, methods and variables available to you- many with live links to code samples in the reference section:

https://developers.google.com/maps/documentation/javascript/3.exp/reference
