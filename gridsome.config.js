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
        path: 'data/vehicles.csv'       
      }
    }, 
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Region',        
        path: 'data/Regions.csv'       
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'VehicleType',        
        path: 'data/VehicleType.csv'       
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Price',        
        path: 'data/Prices.csv'       
      }
    }
  ]
  
}
