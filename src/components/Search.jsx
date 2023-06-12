import React from 'react';
import { useFilter } from '../contexts/filter.context';

function Search() {
	const { search, setSearch } = useFilter();

	return (
		<div className="Search">
			<input placeholder="filter" value={search} onChange={(e) => setSearch(e.target.value)} className="search-input" />
		</div>
	);
}

export default Search;