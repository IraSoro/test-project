# Solution Report

## Code Fixes

### General

- Explicit typing was applied to all props and states. `any` was replaced with specific types.
- Added props.
- The `item` type was moved to a separate file for convenience and reusability.
- Added formatter.
- Removed curly braces around strings where they didn't make sense.

### `useSort.ts`

- Fixed the sorting logic. ASC now sorts in ascending order, and DESC sorts in descending order.
- The conditions in `handleSortClick` were rewritten using a ternary operator.

### `useData.ts`

- Added `clearInterval`.

### `ListPage.tsx`

- Fixed the key usage: previously, the index was used as the key, now `item.id` is used.
- Removed `useMemo` for `activeItemText` as it did not provide a significant performance improvement.
- Added a `loading` state to track data loading.
- Added `debounce` for the input field.
- Optimized the update of `filteredItems` using `useMemo`, instead of using `useEffect` and `useState`.

### `Button.tsx`

- Added a call to `e.preventDefault()` for the button to prevent navigation.

### `Single.tsx`

- Added a dependency in `useEffect`.
- Added a check for receiving information about `item`.

## Additional

- I'd add pagination for working with large data sets.
