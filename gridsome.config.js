// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'MAN TopUsed Deutschland',
 
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Vehicle',        
        path: './static/assets/data/vehicles.csv'       
      }
    }, 
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Region',        
        path: './static/assets/data/Regions.csv'       
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'VehicleType',        
        path: './static/assets/data/VehicleType.csv'       
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Price',        
        path: './static/assets/data/Prices.csv'       
      }
    }
  ]
  
}
