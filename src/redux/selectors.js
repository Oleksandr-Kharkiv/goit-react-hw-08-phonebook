import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filters;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUserName = state => state.auth.user.name;
export const selectUserEmail = state => state.auth.user.email;
export const selectisFetchCurrentUser = state => state.auth.isFetchCurrentUser;

/*---------------------------------- селектор, який вираховується ---*/
export const selectVisibleContacts = createSelector(
  /*-------------------------------- Масив вхідних селекторів ---------*/
  [selectContacts, selectFilter],
  /*-------------------------------- Функція перетворювач -------------*/
  (contacts, valueFilter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(valueFilter.toLowerCase())
    );
  }
);



/*-------------------------------hw-07--------варіант зі звичайними селекторами------*/

// export const getContacts = state => state.contacts.items;

// export const getIsLoading = state => state.contacts.isLoading;

// export const getError = state => state.contacts.error;

// export const getFilter = state => state.filters;
