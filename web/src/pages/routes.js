import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";
import NewIncident from "./NewIncident";

export default () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/profile" component={Profile} />
				<Route path="/incidents/new" component={NewIncident} />
			</Switch>
		</BrowserRouter>
	);
};
