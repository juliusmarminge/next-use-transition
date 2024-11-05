"use client";
import { useTransition } from "react";
import { action1, action2 } from "./action";

function Example1() {
	const [isPending, startTransition] = useTransition();

	return (
		<select
			disabled={isPending}
			onChange={(e) => {
				e.preventDefault();
				return startTransition(async () => {
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
			action={action2}
			onSubmit={(e) => {
				e.preventDefault();
				return startTransition(async () => {
					const form = new FormData(e.currentTarget);
					await action2(form);
				});
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
