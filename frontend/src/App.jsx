import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle";
import { darkThemeColors } from "./styles/Theme";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setToken,
  setUser,
  useGetContactsQuery,
  useGetUserQuery,
} from "./store/store";
import { addContacts } from "./store/slice/contactSlice";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  const { data, isLoading, error } = useGetUserQuery(token);

  const {
    data: contacts,
    isLoading: contactsLoading,
    error: contactsError,
  } = useGetContactsQuery(token);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    dispatch(setToken(token));
  }, []);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data.user));
    }
  }, [data]);

  useEffect(() => {
    if (contacts) {
      console.log(contacts.persons);
      dispatch(addContacts(contacts.persons));
    }
  }, [contacts]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={<Layout />}
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path='/login'
          element={<LoginPage />}
        />
        <Route
          path='/signup'
          element={<SignupPage />}
        />
      </Route>
    )
  );
  return (
    <ThemeProvider theme={darkThemeColors}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
