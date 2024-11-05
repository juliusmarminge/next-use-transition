"use client";
import { useTransition } from "react";
import { action1, action2 } from "./action";

function Example1() {
	const [isPending, startTransition] = useTransition();

	return (
		<select
			disabled={isPending}
			onChange={(e) => {
				startTransition(async () => {
					const foo = e.target.value;
					await action1({ foo });
				});
			}}
		>
			<option value="foo">Foo</option>
			<option value="bar">Bar</option>
		</select>
	);
}

function Example2() {
	const [isPending, startTransition] = useTransition();

	return (
		<form
			// `action` makes it work without js
			action={action2}
			// onSubmit takes over after hydration and we can provide
			// loading state during the transition
			onSubmit={(ev) => {
				startTransition(() => action2(new FormData(ev.currentTarget)));
			}}
		>
			<fieldset disabled={isPending}>
				<input type="text" name="foo" />
				<input type="submit" value="Submit" />
			</fieldset>
		</form>
	);
}

export default function Home() {
	return (
		<>
			<Example1 />
			<Example2 />
		</>
	);
}
