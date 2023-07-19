// jest.config.js
export default {
    // Otras opciones de configuración...
  
    // Habilitar soporte para módulos ES
    transform: {
      '^.+\\.js$': 'babel-jest',
    },
  
    // Opciones adicionales para el soporte de módulos ES
    testEnvironment: 'node',
  };