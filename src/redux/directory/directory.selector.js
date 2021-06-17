import { createSelector } from 'reselect';

const selectDirecotry = (state) => state.directory;

export const selectDirectorySelection = createSelector(
    [selectDirecotry],
    directory => directory.selections
)