import test from "ava";
import { createServer } from "http";
import got from "got";
import app from "../index.js";
import listen from "test-listen";
import {userUser_idFollowingFollowing_idPUT} from "../controllers/userUser_idFollowingFollowing_idPUT.js";

test.before(async (t) => {
    t.context.server = createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ http2: true, throwHttpErrors: false, responseType: "json", prefixUrl: t.context.prefixUrl });
});

test.after.always((t) => {
    t.context.server.close();
});
test("GET/user/{user_id}/following/{following_id} returns correct response and status code for user 1", async (t) => {
    const response = {
        writeHead: (statusCode, headers) => {},
        end: (body) => {response.body = body;}};
    await userUser_idFollowingFollowing_idPUT(null,response,null,1,10);
    const parsedBody = JSON.parse(response.body);
    console.log(parsedBody);
    t.is(parsedBody.statusCode, 200);
});

test("GET/user/{user_id}/following/{following_id} returns correct response and status code for user 2", async (t) => {
    const response = {
        writeHead: (statusCode, headers) => {},
        end: (body) => {response.body = body;}};
    await userUser_idFollowingFollowing_idPUT(null,response,null,2,11);
    const parsedBody = JSON.parse(response.body);
    console.log(parsedBody);
    t.is(parsedBody.statusCode, 200);
});

test("GET/user/{user_id}/following/{following_id} returns correct response and status code for user 3", async (t) => {
    const response = {
        writeHead: (statusCode, headers) => {},
        end: (body) => {response.body = body;}};
    await userUser_idFollowingFollowing_idPUT(null,response,null,2.5,11);
    const parsedBody = JSON.parse(response.body);
    console.log(parsedBody);
    t.is(parsedBody.statusCode, 400);
});

test("GET/user/{user_id}/following/{following_id} returns correct response and status code for user 4", async (t) => {
    const response = {
        writeHead: (statusCode, headers) => {},
        end: (body) => {response.body = body;}};
    await userUser_idFollowingFollowing_idPUT(null,response,null,2,11.5);
    const parsedBody = JSON.parse(response.body);
    console.log(parsedBody);
    t.is(parsedBody.statusCode, 400);
});

test("GET/user/{user_id}/following/{following_id} returns correct response and status code for user 5", async (t) => {
    const response = {
        writeHead: (statusCode, headers) => {},
        end: (body) => {response.body = body;}};
    await userUser_idFollowingFollowing_idPUT(null,response,null,1000,11);
    const parsedBody = JSON.parse(response.body);
    console.log(parsedBody);
    t.is(parsedBody.statusCode, 404);
});

test("GET/user/{user_id}/following/{following_id} returns correct response and status code for user 6", async (t) => {
    const response = {
        writeHead: (statusCode, headers) => {},
        end: (body) => {response.body = body;}};
    await userUser_idFollowingFollowing_idPUT(null,response,null,1,10001);
    const parsedBody = JSON.parse(response.body);
    console.log(parsedBody);
    t.is(parsedBody.statusCode, 404);
});