// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Black Friday',
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
        typeName: 'Location',        
        path: 'data/Locations.csv'       
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
