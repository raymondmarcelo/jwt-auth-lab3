const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const reportCtrl = require('../controllers/reportController');

// INNER JOIN
router.get('/reports/users-with-roles', auth(true), reportCtrl.usersWithRoles);

// LEFT JOIN
router.get('/reports/users-with-profiles', auth(true), reportCtrl.usersWithProfiles);

// RIGHT JOIN
router.get('/reports/roles-right-join', auth(true), reportCtrl.rolesRightJoin);

// FULL OUTER JOIN (emulated)
router.get('/reports/profiles-full-outer', auth(true), reportCtrl.profilesFullOuter);

// CROSS JOIN
router.get('/reports/user-role-combos', auth(true), reportCtrl.userRoleCombos);

// SELF JOIN
router.get('/reports/referrals', auth(true), reportCtrl.referrals);

// Latest login
router.get('/reports/latest-login', auth(true), reportCtrl.latestLogin);

module.exports = router;
