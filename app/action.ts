"use server";

export async function action1(obj: {
	foo: string;
}) {
	console.log(obj);
	await new Promise((resolve) => setTimeout(resolve, 1000));
	console.log("Finished");
}

export async function action2(form: FormData) {
	console.log(form);
	await new Promise((resolve) => setTimeout(resolve, 1000));
	console.log("Finished");
}
