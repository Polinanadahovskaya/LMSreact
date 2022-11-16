const useAuth = () => {
  const users = sessionStorage.getItem('users');
  return JSON.parse(users) || [];
};

export default useAuth;
