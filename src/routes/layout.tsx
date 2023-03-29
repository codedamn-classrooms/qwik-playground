import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import Header from "~/components/starter/header/header";

export const useServerTimeLoader = routeLoader$(() => {
	return {
		date: new Date().toISOString(),
	};
});

export default component$(() => {
	return (
		<main>
			<Header />
		</main>
	);
});
