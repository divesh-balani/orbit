import { describe, expect, it } from "vitest";
import { createFAQSchema } from "@/utils/web-schema";

describe("createFAQSchema", () => {
	it("produces valid FAQPage schema structure", () => {
		const faqs = [
			{ question: "What is Orbit?", answer: "Orbit is a screen recorder." },
		];
		const schema = createFAQSchema(faqs);

		expect(schema["@context"]).toBe("https://schema.org");
		expect(schema["@type"]).toBe("FAQPage");
		expect(Array.isArray(schema.mainEntity)).toBe(true);
		expect(schema.mainEntity).toHaveLength(1);
	});

	it("maps each FAQ to a Question entity with acceptedAnswer", () => {
		const faqs = [
			{ question: "Is Orbit free?", answer: "Yes, Orbit is free." },
			{
				question: "What platforms does Orbit support?",
				answer: "Mac and Windows.",
			},
		];
		const schema = createFAQSchema(faqs);

		expect(schema.mainEntity[0]).toEqual({
			"@type": "Question",
			name: "Is Orbit free?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Yes, Orbit is free.",
			},
		});
		expect(schema.mainEntity[1].name).toBe("What platforms does Orbit support?");
		expect(schema.mainEntity).toHaveLength(2);
	});

	it("strips HTML tags from answer text", () => {
		const faqs = [
			{
				question: "How do I start?",
				answer:
					'Visit <a href="/download">the download page</a> to get started.',
			},
		];
		const schema = createFAQSchema(faqs);

		expect(schema.mainEntity[0].acceptedAnswer.text).toBe(
			"Visit the download page to get started.",
		);
		expect(schema.mainEntity[0].acceptedAnswer.text).not.toContain("<a");
	});

	it("strips multiple different HTML tags", () => {
		const faqs = [
			{
				question: "What features does Orbit have?",
				answer:
					"Orbit offers <strong>4K recording</strong>, <em>instant sharing</em>, and <a href='/pricing'>affordable pricing</a>.",
			},
		];
		const schema = createFAQSchema(faqs);

		expect(schema.mainEntity[0].acceptedAnswer.text).toBe(
			"Orbit offers 4K recording, instant sharing, and affordable pricing.",
		);
	});

	it("handles empty FAQ array", () => {
		const schema = createFAQSchema([]);

		expect(schema["@type"]).toBe("FAQPage");
		expect(schema.mainEntity).toHaveLength(0);
	});

	it("produces JSON-serializable output", () => {
		const faqs = [{ question: "Test question?", answer: "Test answer." }];
		const schema = createFAQSchema(faqs);

		expect(() => JSON.stringify(schema)).not.toThrow();

		const parsed = JSON.parse(JSON.stringify(schema));
		expect(parsed["@type"]).toBe("FAQPage");
		expect(parsed["@context"]).toBe("https://schema.org");
	});

	it("preserves the correct number of questions", () => {
		const faqs = Array.from({ length: 5 }, (_, i) => ({
			question: `Question ${i + 1}?`,
			answer: `Answer ${i + 1}.`,
		}));
		const schema = createFAQSchema(faqs);

		expect(schema.mainEntity).toHaveLength(5);
	});

	it("applies FAQPage schema to screen-recorder page FAQs", () => {
		const screenRecorderFaqs = [
			{
				question: "Is Orbit a free screen recorder?",
				answer:
					"Yes, Orbit offers a powerful free version, making it one of the best free screen recorders available.",
			},
			{
				question: "How does Orbit compare to OBS?",
				answer:
					"Orbit is designed to be highly user-friendly while delivering high recording quality.",
			},
			{
				question: "Can I download Orbit on multiple devices?",
				answer:
					"Yes, Orbit is cross-platform and can be downloaded on macOS and Windows.",
			},
			{
				question: "What platforms does Orbit support?",
				answer:
					"Orbit is compatible with <a href='/screen-recorder-mac'>macOS</a> and <a href='/screen-recorder-windows'>Windows</a>.",
			},
			{
				question: "How does Orbit improve team productivity?",
				answer:
					"Orbit's advanced collaboration features make it easy to share, review, and provide feedback.",
			},
		];
		const schema = createFAQSchema(screenRecorderFaqs);

		expect(schema["@type"]).toBe("FAQPage");
		expect(schema.mainEntity).toHaveLength(5);
		expect(schema.mainEntity[3].acceptedAnswer.text).not.toContain("<a");
		expect(schema.mainEntity[3].acceptedAnswer.text).toContain("macOS");
	});

	it("applies FAQPage schema to free-screen-recorder page FAQs", () => {
		const freeScreenRecorderFaqs = [
			{
				question: "Is Orbit really free?",
				answer:
					"Yes, Orbit is completely free, with no hidden fees. You get access to professional-grade <a href='/screen-recorder'>screen recording</a> tools without a subscription.",
			},
			{
				question: "How long can I record for on the free plan?",
				answer:
					"Orbit's free plan allows for unlimited recording time, so you can capture your screen without interruptions.",
			},
			{
				question: "Can I store my recordings in the cloud?",
				answer: "Yes, from just $6/month, Orbit offers unlimited cloud storage.",
			},
			{
				question: "What makes Orbit's free screen recorder different?",
				answer:
					"Orbit offers advanced features for free, such as high-quality video capture and an intuitive interface.",
			},
			{
				question: "Do I need an account to use Orbit's free screen recorder?",
				answer:
					"Yes, creating a free account allows you to access Orbit 100% free locally.",
			},
		];
		const schema = createFAQSchema(freeScreenRecorderFaqs);

		expect(schema["@type"]).toBe("FAQPage");
		expect(schema.mainEntity).toHaveLength(5);
		expect(schema.mainEntity[0].acceptedAnswer.text).not.toContain("<a");
		expect(schema.mainEntity[0].acceptedAnswer.text).toContain(
			"professional-grade",
		);
	});
});
