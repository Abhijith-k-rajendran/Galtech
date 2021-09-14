import React from 'react';
import './App.css';
import Cards from './Cards';

function App() {    

  
  return (
    <div className="app">
      <div className="top-section">
      <div className="filter-section-left">

          <div className="shape">
          <h3>Shape</h3>
          <img id="Heart" src="https://png.pngtree.com/element_our/20190528/ourmid/pngtree-flat-heart-shape-image_1129280.jpg" alt="Heart"/>
          <img id="Emerald" src="data:image/jpeg;base64,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" alt="Emerald"/>
          <img id="Oval" src="https://w7.pngwing.com/pngs/673/12/png-transparent-ellipse-shape-circle-oval-point-shape-thumbnail.png" alt="Oval"/>
          <img id="Round" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQSEhgSEhESGBgZHBoYGBIaEhgZGhIYGhUaGhkaGBgcIS4lHB4sHxgYJjgmKy8xNzU1GiQ7QDszPy5CNzEBDAwMBgYGEAYGEDEdFh0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAOMA3gMBIgACEQEDEQH/xAAbAAEAAwADAQAAAAAAAAAAAAAAAQYHAgQFA//EAEMQAAIBAQYCCAMFBgUCBwAAAAECAAMEBRESITEGQQciMlFhcYGRE0KhFJLB0fAVI1JygrEzQ2KisrPCFhckU2Nzg//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDXmbOMBCPlGB3h1C6jeFUMMTvAhFyanygrmOYbQhLaN5wzFTlG0CWObQef694Vsoynf84Zcuq+UKoYZjv+UCEXJqfKCuY5htCHNo3nOred50rKhqVqqU0HzuwAx7h3nwGsDtsc2g8/17yUbKMp3/OZVfXS4uf4V2WZ6znqrUdWyseWSkvWb1y7bTzRw3xBexzWuubPTPyM2QZTy+DT1JH+vA+MDTLx4osNjJ+0WygrAa0w2dx/QuLcu6VS8el67kb92tpq+K0wq6eLsD9JwunoZsVPA2mtWrNzUEU0PoMW/wB0ttg4Ju2gAEsFn02L0xUYYc8z4nH1gZ5bOmxScKV3sRyLWgAn+kIf7yE6WraR1LpJHfjUb+yzYaNnRBgiIo7lUD+0+0DFh0uWqnq91EDxeov1KGfWz9NdJmxq2Cou3Yrq/wBGRf7zZJ1LTYaVUYVKNNweTIrY+4gUay9LN2VgAz1qJx/zKRI96ZaWy679stpGFntNGoe5KikjHvXHEeonm3h0fXXX7VhpL408aX/TIB9ZUL16F6BOayWurTYHELUUOMeQDLlK64a6wNRQZNTzkFcTm5b+0xl04junctaqI8TaF+uFVQPQSwcOdLllr4U7WrWZjpmOLUzicO0BivqMB3wNHY5tB5wjZRlO8+dGojItSk6urDFWVgykHmpGhE+iKGGY7wIRcmp8oK5jmG35QhzaN5wzFTlG0CWObQecK2UZTv8AnDLl1XyhVDDMd/ygQi5NT5SWGbUeUhTm0bzksSug84EImXU+WkFMxzD6wpLHBtoYlTgu0CWbNoPPWFfKMp3hlC6rvt3wqhhid4EKuXU+Wn68IZc3W0w8fCdS8bxp0KTVrTUVKajFnbQDkAOZJxwAGpJ0mQXpxDbuIK7WK71anZh23Jy5lJ7VdhjgpwOCDfXfDQLDxh0p0qbfZ7uUWisSF+JgWpqx0AQDWo2PdpqNTtPGuvo5t95OLVfFpqIDqKWINTA8guGSiNjgAfFRL7wbwJZbsUMi/ErkYNaGGviEXZF321PMmW6B4tw8NWSwplstnRORftO38ztix8scBywntREBERAREQEREBERASscS8DWK8ATWohah/z6eCVAe8kDBv6gZZ4gYbaeHL2uB2r2Gqa9nxzOoUsMP/lo44j+ZTsNSsufB/SFZryK02wo2g/5LNpUI/8AbfDrfynA+eGMv8znjjoxoWzNXsuWhaNW0GFOsd+uB2Wx+Yd5xB3AX5mzaDz1hWyjKd/zmQ8KcfV7DW/Z98q6suCraG1ZO74h1DqeVQE+OIOI12kVZQ+IOIxDA6EciMNxhAKuXU+WkFcxzDb8oU5tG8+6GJByjb84Es2bQeesKcuh89IYZdV/OFUNq2/tAFs2g89YVsvVP0hlC6rv7wqhhi2/tAhVy6ny0nTva8KVnpPaa7hKaDFmO/cABzJOgA3JnZesArNUYKqgszE4BQBiSTyAGMxS87XX4lvBbNZyyWOicS5BwC7Gq4O7tqFU7AnbrGBJNs4pteAzUbFSb0X8HrEeig/e2O5LnoWKitCzUwiL7sebM3Nj3/hOdzXVRsdBLPZ0CIgwA5k82Y82J1JnoQEREBERAREQEREBERAREQEREBERArPGfCNC9KPw6oy1FB+HXAxakf8AuU815+BwIzPhniK03Haf2deYPwcepUxLCkCdKlNvmpHmNxroCCDuUrfGfCtG9LOaVTquuJpVgOtSfD6qdAV5+BAID2lqLUUFSCCAwbEEMCNCCNxrOStlGU7/AE1mP9HvEta7rU1z3h1cGy0nY6U2Oqrid0bEFTyJ7jpsCqCMTv8ArlAhVy6ny0kkZtR5ayFObRvyhmK6Lt7wCrl1PlpDJm6w+sKSxwbb2ni8Y3+t3WSpaNCQMtNP46jaKvlzPgpgUPpX4lqV6qXPYgzO5X42GGLFuxSx5DZmPdhrvL7wXwzTuyyrZ0wZj1qtTDWpUI1P8o2A7h34k0bob4cZs972nFqlVmFJm3wJPxKnmzYqNtA3JprcBERAREQEREBERAREQEREBERAREQEREBERAz/AKVeDRb7P8ein/qaKkrgNayDEtTPedyvjiPmnz6LOLDeFn+FWcG0UAA5J1qpsr+J+VvHA/NNEmIcc2J7lvWnedmU/BqsS6DQZj/i0zyAZesMeeOnVEDZ2bNoPPWFOXQ+ek+FjtSVaSVqLZkcKysNcVYYjTlPuoDatv7QBbNoPOY10i13vO9rPdFJurTYByNs7DM7dxyUx75hNavi2pZbPUtB2poznXHEKpOHqQB6zMehS7mrVbTelbV3ZkVu9nb4lVsPMoMfFoGs2OypRppRpqFRFVFUclUYAewnYiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAng8ZXCt4WKrZjhmYZqbH5Ki6oceQx0PgTPeiBk3Qpfp+HVu+tiHoEsintBC2Drh/pf/AJ+E1Erm1HlMZ4oT9kcRUrYBlo2gh6nJcHOSvj34E5/MibMxI0Xb3gZ101W80LuFEMMa7qpGxyJ12P3lQestPR/dX2W7bNSIwbIHYcw9TrsD5FsPSZv0rk2u9rDYTiR1AeWHxqwVv9qKZtQGGggcoiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgZn043V8W7ktAAzUHBJ7kqYIwH9Xw/aWXgW9/tN22aqSWYoFY8y6E02J8ypPrO/xZYPtNgtNDDEvScL/NlJT/AHASh9BNsFSxVqJOJp1cwBPZWoowH3kc+sDy8TaOMBzWn/tCWTH/AJn6zaJjPBpFTim2N/D8fD+l0SbNAREQEREBERAREQEREBERAREQEREBERAREQEREBERATFehymKV42+ybZcdP8A6qzJ/wB82qYfwjVNDiK8CMdftOw5NaqbQOxwGuTie3Kef2n62hGm0TF7mf4PF1VDp8T4g+9ZxV/CbRAREQEREBERAREQEREBERAREQEREBERAREQEREBERATDbgbHiK8MNf8Ye1emPwm5TFejGkK1+3hWOBX9/7valYfRTAcYVPsvE9ktGGAqfBzH+ZmoN7LhNqmQ9O9h/dWa1poUdqZI3GcB0OPLA02+9NOuO3i02ajaBtUpo+HcWUEg+IJI9IHoREQEREBERAREQEREBERAREQEREBERAREQEREBERA6l42sUaNSs21NHcnwRSx/tMp6BrGSlqtDHtMiA95UMzf81ls6Wrz+z3TWwIDVctFfHOeuPuK86/RRdxoXVROBBql6zYc87YIfuKkD1OO7l+13daKI6zlM6Ab56ZzqB5kZf6pXehC+PjXe1mY9azuQBz+HUJdT97OPQTQlxx623j3zGLEwuTiNkJy2a0nAfwhKrYoQNgFqDLjyUHvgbhERAREQEREBERAREQEREBERAREQEREBERAREQEROvbLUlKm9WowVEVnZj8qqCSfYQMh6Y7U1rttkuukdSVZuYD1WyJjz6qhj5PNYsdBaFNKNNeqiqijbBVUAD2AmQ9Glne8r1tN7VFOCscgPJ3BVFB55KYw9VM2RcPm38e6BGbPptzmf9L/Dn2qxitTXGrZsX03ak2HxBh4YBv6WA3mgth8uGPhC4YYPhj464iBVejPicXjYVLtjWpYU6ox1JA6rn+YDHzDd0uUwm2034bvdayBvsloxxQbfDJGdAP4kJBXvGAx1M2+zV0qotSmysjqGVgcQysMQQe4iB94iICIiAiIgIiICIiAiIgIiICIiAiIgIiICZV008QstNLsoYmpXKl1XEnJmwRBhzZht3L4y/cR33SsFlqWmseqg0XnUY6Ki+JPtqdhMt6MbpqXhbal82zA9Y/CBBwargBmUH5EXBRvrhrisDQ+C7gF22KnQ0L4ZqpHzVG1bXmBgFB7lE97Lm125SExHa28e+S2Py7eHfAZcuu/KAubrbSFBB623jrDAk9Xbw0geNxTcVO87M9mqAKT1kqYYmm4HVYD1wI5gkTOejniSrdtpa57x6gDEUnJ0psxxC4ndGxzA8if8AVpsDEHs7+GmkpnSHwSl5Uc65VtKA/DqH513+G5/hxxwPyk9xOIXuJk3Rxx46v+y7zLJWQ5KdV9CxGgpVCfn/AIW+bbfDNrMBERAREQEREBERAREQEREBERAREQE+NorJSRqlRgqKCzOSAqqBiSSdgBJq1FRSzsFVQSzEgBQBiSSdAAOcxTi/ievflpF2XaD8HHr1NQKoUjF3Py0l0IG5OGmOAgde9rZW4lvFaFAutjonEvhgAuODVWB+dsMFB2HIdabNd1gp0aSUqShUpqFVRyA8eZ5k8yTPO4T4cpXbZ1oUxjzeoQMar82Pd3Ach9faIOOK9n6eOkAGz6bc5JbLpvzhsD2d/DTSFIHa38ddIEB8+m3OC+Tq7yWIPZ38NIQgDBt/HWAK5dRrygLm623h5SFBHa28ddYIJOK7e0Cmce8DU70U1Ey07Sq9Wr8tQDZKmHLubceI0lW4R4/r3fV/Z18q65OqtdtWp9wfDHOh5OMfUajXWIPZ38NNJ4XFHC1lvGl8O0r1lxyVl0emT3HmP9J09dQHv0ay1FDoysrAFXUgqwOoII0I8Z9phIN68Mvt9osZbx+HqfU0XPqCT82E0vhTjmx3iAKVTLV52dyFfxy8mHiPUCBa4iICIiAiIgIiICIiAiIgJ0L0vOjZKTV7RUWnTXd2PsABqSeQGJMp/F/SdZLDmp0SLRXGmRG6iHbr1BiMRr1RidMDhvKZd/DF439VW1XnVejQ3RMpUlTyo0zooP8AG2JOnagcL6v+2cRVzY7Cj07KuBdjoCMdHrsOWnVQY4kY64aafwhwnQu2h8OiCWbA1KxAz1WHf3KNcFGgx5kknv3NdNGx0hRo0lSmuyjXMf4mO7McNzO8QScV29vPSADZtDpzgtl6v185LEHs7+GmkKQBg2/6w1gCuXUa8oAza7cpCgjtbeOuslgT2dvDTWAK5dRrygJm1MhQQcW294YEnFdvaAVs2h05wWy9UfrGSxB0Xf20hSAMG39/rAEZdRry/XtAXN1v1pIUEatt76wQScV29vPSBDAVAUYAgjUEYhhsQQdxrM34q6KbPWY1LE32ap2smppM24wA1p64ariB/DNKYg9nf20hSAMG39/rAxgcTX3chC26ibRQBwFRiWGGwy2hcSCe5wT4S43H0rXdacFqO1nc6ZaowUnwqLiuHi2WXQLhjm2IwwOoPp7yp350c3dayW+zCmx/zKJFM+Jy9gnxKwLfZrSlVQ9N0dTsyuGU+RGhn3mMV+iS0UGNS7byZW5Bs9JgPGpTJx+6Jxw4pshygmuo8aNXH1OFSBtMTFx0hX5ROFe6sQOf2W0Lj5MGK+wnP/zetq9u6T96ov8AdIGyxMaHS1bn/wAO6ST/APq39lE4f+OeIa5y0rsy47H7JWGHmztlgbROleF50bMue0V6VNf4nqKgPlidTMia7OKLWMKtoNBTsfi06Xp+4Bb3nYsPQ4Xb4ltt1RydW+GNT3/vKmJP3YHr390wWKiCtlWpaH5EA06YPizDMfRSD3yrv+3b9ODY2azNuMGpIynvHbq4g/y6cppNy8FXfZMDZrMmca/FfF3BwwxDNjl/pwliDDDA9r8eWsClcL9G1jsGWq6/aKww/eOBlQ99OnspxGhOJHIy6hM3WMhQRq23vBBJxXb2+kArZ9Dpz/XvBfL1f1rJYg6Lv7aQpAGDb+/1gCuXUa8oC5ut9PKQoI7W3vrJYEnEbfrHSBAbNodOcknLoNecMQ3Z39oUgaNv76QOVfs+sUOzEQPnZ9/SK3a9oiBztG3r+Bk0ez7xEDhZ9/SRW7XtEQOdo29fwMml2feIgcLPv6SKnb9oiBztGw85ypdn3/uZMQPnQ3PlONTt+0RA52jYeclOx6H8YiBxs+5nF+36j8IiB9K/Z9Yo9n3iIHzs+/p+Iit2vaIgc7Rt6yaXZ94iB87PufKK/a9IiB//2Q==" alt="Round"/>
          <img id="Asscher" src="https://cdn4.iconfinder.com/data/icons/diamond-shape/100/Asscher_Shape-512.png" alt="Asscher"/>
          </div>

          <form action="./">
          <label for="colors">Color:</label>
          <select id="colors" name="colors">
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="H">H</option>
              <option value="I">I</option>
          </select>
          </form>

          <form action="/action_page.php">
          <label for="Clarity">Clarity:</label>
          <select id="clarity" name="clarity">
              <option value="IF">IF</option>
              <option value="FL">FL</option>
              <option value="S11">S11</option>
              <option value="S12">S12</option>
          </select>
          </form>

          </div>

          <div className="filter-section-right">
          <form action="/action_page.php">
              <label for="Cut">Cut:</label>
              <select id="Cut" name="Cut">
              <option value="Good">Good</option>
              <option value="VeryGood">Very good</option>
              <option value="Excellent">Excellent</option>
              </select>
          </form>

          <form>
              <label for="carat">Carat</label>
              <input name="carat" type="number"></input>
          </form>

          <form>
              <label for="price">Price</label>
              <input name="price" type="number"></input>
          </form>
          </div>
      </div>
      <div className="bottom-section">
        <Cards/>
        <Cards/>
        <Cards/>
        <Cards/>
      </div>
    </div>
  );
}

export default App;
