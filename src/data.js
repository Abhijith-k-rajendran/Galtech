const data = [
        {
            "Diamond_name":"D1",
            "src":"data:image/jpeg;base64,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bHyknVpM6shcgFdSVBNr67WHhtzlQ4LjamHSnTLlqdjlYcu8bqVudBO7inG2GUAhja+7Lobj7JF9uc1ebKzzZYm6FH4K5adhzYlb38Tbae06jP8A7wK88mS3T7SkeG8rtDjBcqropDH77nXlozEbyYwbgE5UChTtvfQXPvf2ksXfcStNUFlLKSBpdhe3gBbSY4/GhFJvsL6W16Afh7yGxuEd6ucs2Tu5EAuWAt9Zr5QCST1tOvEYPOt6rqiCzNaw0F9CTpvYzPmtNOH48WNjSJB2AIJ9rayVxNfKo0ygjW+pH8oAvr5SBwvEqIbLRF+VwCx9+d+ii8m8Jh2bvVd+S/r+lz8g6iRro0Xex+pT9C7fJR7nykkiACw0AmyJloiIgIiICIiAiIgIiICIiAiIgIiICc9fDhvOdEQK7/mWHDtRd8lQaFWV00PRitiPEEgzzEcKDoy5/rIVDLrpay38tNJ3cY4PTxCgNo6/UcfWU/MdR+R1nNRDUwFcWYbMNm8v0M15+kzfr55iMK9F8j6VAL3B68wZY34B/pTiL2qfDz2A0sBm06XX857xbhpr1e+wW6kIwS+ci5CnXRtTY85McM4kzU/g1lyVApU6EBltbMp2Pjb+3S939Mfj/aqdn8MKrF3YIqFCCTa7XuAOp05dZKcRvnG5prkJAJszEEqpt1uPxmrD4evVsVRma1s50UA7gMdPb+8pgcP9F+IrlXLOrIouTcXsWuLLbe2vKL0k536lqdJlpZnPey6i4W19coJIG2mp6yvtSOLqhWdbAXCDNUVQObFe4T45vKdBwVTEPmc5j7Kg8By/MyxcOwCUVsu53PUzHk/63mmDwKUwAqrmAtmygE9dhoJ2xEw0REQEREBERAREQEREBERAREQEREBERARPJ7ATXUphhYi4myIETieFrbQm3vbx6ymcVxtSk+TLnU7MWbXkdAd59FNReo95D8W4fTqWIIzA3ta4b9D+/Ga5vvqdbnit8HxNSswQqq6EkkXCqNySZPUMKl795vH6qnyXe3rN2D4PlGpAU8t722vyv+Uk6eFUcrnxi2b4c7nrnpOQLKNOgnXRU7mbQJ7MqREQEREBERAREQEREBERAREQEREDyeW8ZlEDy08yCZRAxyCa3cCbGM1MsDneu3IzU7sdzOv6PeeigOXvKODKZ2YWlzIm9KQHn1myNTHk9iJFIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgeTzNMpgywMrz2YqJlA8vMC0zInhWB5mmV5hlmSraBlE8nsBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/Z",
            "price":"30000",
            "Description":"D1 Diamond",
            "shape":"Round",
            "Cut":"Good",
            "color":"D",
            "carat":"20",
            "clarity":"S12"
        },
        {
            "Diamond_name":"D2",
            "src":"https://freepngimg.com/thumb/diamond/4-diamond-png-image.png",
            "price":"400",
            "Description":"D2 Diamond",
            "shape":"Oval",
            "Cut":"Very Good",
            "color":"E",
            "carat":"22",
            "clarity":"S11"
        },
        {
            "Diamond_name":"D3",
            "src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG2y0Fij29-lux83wei1fx9gphu7DxeCYfoezZ0WYaDAKNw9PF2VGzlJ6K6aYZ4OnpQJE&usqp=CAU",
            "price":"20000",
            "Description":"D3 Diamond",
            "shape":"Oval",
            "Cut":"Very Good",
            "color":"D",
            "carat":"22",
            "clarity":"IF"
        },
        {
            "Diamond_name":"D4",
            "src":"https://freepngimg.com/thumb/diamond/4-diamond-png-image.png",
            "price":"400",
            "Description":"D4 Diamond",
            "shape":"Emerald",
            "Cut":"Good",
            "color":"H",
            "carat":"2",
            "clarity":"S12"
        },
        {
            "Diamond_name":"D5",
            "src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG2y0Fij29-lux83wei1fx9gphu7DxeCYfoezZ0WYaDAKNw9PF2VGzlJ6K6aYZ4OnpQJE&usqp=CAU",
            "price":"20000",
            "Description":"D5 Diamond",
            "shape":"Heart",
            "Cut":"Very Good",
            "color":"D",
            "carat":"20",
            "clarity":"S12"
        },
        {
            "Diamond_name":"D6",
            "src":"https://3.imimg.com/data3/SD/ML/MY-6991196/diamonds-500x500.jpg",
            "price":"24000",
            "Description":"D6 Diamond",
            "shape":"Emerald",
            "Cut":"Excellent",
            "color":"D",
            "carat":"2",
            "clarity":"FL"
        },
        {
            "Diamond_name":"D7",
            "src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4TDGn1QiHdyYxweDQLcov5-8xO2jPaQd1xORCr-KrG38-83McLQdRCPdn4JxGS-RGKII&usqp=CAU",
            "price":"24000",
            "Description":"D7 Diamond",
            "shape":"Heart",
            "Cut":"Good",
            "color":"H",
            "carat":"8",
            "clarity":"S12"
        },
        {
            "Diamond_name":"D8",
            "src":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4TDGn1QiHdyYxweDQLcov5-8xO2jPaQd1xORCr-KrG38-83McLQdRCPdn4JxGS-RGKII&usqp=CAU",
            "price":"30000",
            "Description":"D8 Diamond",
            "shape":"Round",
            "Cut":"Excellent",
            "color":"D",
            "carat":"2",
            "clarity":"IF"
        },
        {
            "Diamond_name":"D9",
            "src":"https://freepngimg.com/thumb/diamond/4-diamond-png-image.png",
            "price":"400",
            "Description":"D9 Diamond",
            "shape":"Asscher",
            "Cut":"Good",
            "color":"E",
            "carat":"2",
            "clarity":"S12"
        },
        {
            "Diamond_name":"D10",
            "src":"https://freepngimg.com/thumb/diamond/4-diamond-png-image.png",
            "price":"400",
            "Description":"D10 Diamond",
            "shape":"Asscher",
            "cut":"Excellent",
            "color":"I",
            "carat":"2",
            "clarity":"S11"
        }
    ]

    export default data