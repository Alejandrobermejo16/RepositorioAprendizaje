export const fetchCoctelNameStart = (nameCoctel) => ({
  type: 'FETCH_COCTEL_NAME_START',
  payload: { nameCoctel, loading: true },
});

export const fetchCoctelNameSuccess = (data) => ({
  type: 'FETCH_COCTEL_NAME_SUCCESS',
  payload: { data, loading: false },
});

export const fetchCoctelNameFailed = (error) => ({
  type: 'FETCH_COCTEL_NAME_FAILED',
  payload: { error, loading: false },
});
