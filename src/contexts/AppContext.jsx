import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function AppProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  // Mostrar notificação
  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    
    // Auto remover notificação após 5 segundos
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  // Mostrar notificações específicas
  const showSuccess = (message) => showNotification(message, 'success');
  const showError = (message) => showNotification(message, 'error');
  const showWarning = (message) => showNotification(message, 'warning');

  // Fechar notificação manualmente
  const closeNotification = () => setNotification(null);

  // Função helper para requisições com loading
  const withLoading = async (asyncFunction) => {
    setLoading(true);
    try {
      const result = await asyncFunction();
      return result;
    } catch (error) {
      showError(error.message || 'Ocorreu um erro inesperado');
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider value={{
      loading,
      setLoading,
      notification,
      showNotification,
      showSuccess,
      showError,
      showWarning,
      closeNotification,
      withLoading,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp deve ser usado dentro de AppProvider');
  }
  return context;
}