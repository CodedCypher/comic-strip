import clientPromise from "../../../lib/mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
	adapter: MongoDBAdapter(clientPromise),
	providers: [
		GoogleProvider({
			clientId:
				process.env.GOOGLE_CLIENT_ID ||
				"1075962239458-22fgo43lve9suj50mahk4d6tloiol4na.apps.googleusercontent.com",
			clientSecret: process.env.GOOGLE_CLIENT_SECRET || "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",
		}),
	],
	session: {
		strategy: "jwt",
	},
	secret: process.env.SECRE || "B!UjHMyUWD*2w8p!",
	URL: "https://bigdaddycarlomeneses.vercel.app/",
};

export default NextAuth(authOptions);
