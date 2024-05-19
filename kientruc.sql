
INSERT INTO "public"."Student" ("student_id", "student_name", "code", "status", "password", "email", "gender", "total_credits") VALUES
(18, 'Nguyễn Xuân Long', 20005703, 'active', '$scrypt$N=32768,r=8,p=1,maxmem=67108864$mGZTIOpIKcY9ryGVhaUH28z39fGPSXCOw5vuR+Yi9Ck$oXdvaastx4hY7JGPMOvL5QI+lU/JtaDvFyt2aB1WnLl9RyUF4YYb5tMbIiDZEh6sFZGoEZggZs2W7/xruKPpig', '01635080905l@gmail.com', 't', 3);


INSERT INTO "public"."Education" ("education_id", "course", "training_level", "sector", "faculty", "training_type", "major", "facility", "identifier_class", "student_id") VALUES
(1, '2020-2021', 'Đại học', 'Kỹ thuật phần mềm', 'Khoa Công nghệ Thông tin', 'Chính quy', 'Kỹ thuật phần mềm - 7480103', 'Cơ sở 1 (Thành phố Hồ Chí Minh)', 'Đại học Kỹ thuật phần mềm 16A - 7480103', 18);



INSERT INTO "public"."Subject" ("subject_id", "subject_name", "credits", "isRequired", "term", "theory", "practice") VALUES
(235767, 'Kiến trúc và Thiết kế phần mềm', 3, 't', '1-1st', 3, 2);
INSERT INTO "public"."Subject" ("subject_id", "subject_name", "credits", "isRequired", "term", "theory", "practice") VALUES
(806936, 'Nhập môn Tin học', 2, 't', '1-1st', 3, 0);
INSERT INTO "public"."Subject" ("subject_id", "subject_name", "credits", "isRequired", "term", "theory", "practice") VALUES
(158095, 'Kỹ năng làm việc nhóm', 2, 't', '1-1st', 3, 0);
INSERT INTO "public"."Subject" ("subject_id", "subject_name", "credits", "isRequired", "term", "theory", "practice") VALUES
(239405, 'Toán cao cấp 1', 2, 't', '1-1st', 3, 0),
(227801, 'Nhập môn Lập trình', 2, 't', '1-1st', 3, 0),
(843452, 'Triết học Mác - Lênin', 3, 't', '1-1st', 3, 0),
(526007, 'Kỹ thuật lập trình', 3, 't', '2-1st', 3, 0),
(598015, 'Kinh tế chính trị Mác - Lênin', 2, 't', '2-1st', 3, 0),
(481239, 'Toán ứng dụng', 3, 'f', '2-1st', 3, 0),
(488350, 'Hàm phức và phép biến đổi Laplace', 3, 'f', '2-1st', 3, 0),
(265362, 'Phương pháp tính', 3, 'f', '2-1st', 3, 0),
(999745, 'Vật lý đại cương', 3, 'f', '2-1st', 3, 0),
(579250, 'Cấu trúc rời rạc', 3, 't', '3-2st', 3, 0),
(380781, 'Cấu trúc dữ liệu và giải thuật', 4, 't', '3-2st', 3, 2),
(361512, 'Hệ cơ sở dữ liệu', 4, 't', '1-2st', 3, 2),
(966490, 'Toán cao cấp 2', 2, 't', '1-2st', 2, 0),
(172283, 'Lập trình hướng đối tượng', 3, 't', '1-2st', 2, 2),
(894143, 'Giao tiếp kinh doanh', 3, 'f', '1-2st', 3, 0),
(669904, 'Kĩ năng xây dựng kế hoạch', 3, 'f', '1-2st', 3, 0),
(640361, 'Quản trị doanh nghiệp', 3, 'f', '1-2st', 3, 0),
(569598, 'Môi trường và con người', 3, 'f', '1-2st', 3, 0),
(789571, 'Quản trị học', 3, 'f', '1-2st', 3, 0),
(806092, 'Kế toán cơ bản', 3, 'f', '1-2st', 3, 0),
(747262, 'Mạng máy tính', 3, 't', '2-2st', 3, 0),
(912070, 'Hệ thống công nghệ web', 3, 't', '2-2st', 2, 2),
(403989, 'Phân tích thiết hế hệ thống', 3, 't', '2-2st', 2, 2),
(855033, 'Hệ quản trị cơ sở dữ liệu NoSQL MongoDB', 3, 't', '2-2st', 2, 2),
(879227, 'Logic học', 3, 'f', '2-1st', 3, 0),
(304582, 'Hệ Thống Máy tính', 3, 't', '2-1st', 3, 0);
INSERT INTO "public"."Prerequisite" ("prerequisite_id", "prerequisite_subject_id", "subject_id") VALUES
(3, 843452, 598015);
INSERT INTO "public"."Prerequisite" ("prerequisite_id", "prerequisite_subject_id", "subject_id") VALUES
(2, 227801, 526007);
INSERT INTO "public"."Prerequisite" ("prerequisite_id", "prerequisite_subject_id", "subject_id") VALUES
(1, 227801, 380781);
INSERT INTO "public"."Prerequisite" ("prerequisite_id", "prerequisite_subject_id", "subject_id") VALUES
(4, 806936, 361512),
(5, 227801, 172283),
(6, 361512, 403989),
(7, 361512, 855033);

INSERT INTO "public"."Class" ("class_id", "subject_id", "professor_name", "class_name", "max_capacity", "current_capacity", "term", "year", "status", "isEnrolling") VALUES
(612914, 526007, 'Bùi Công Danh', 'ĐHKTPM16A', 100, 0, 2, 2021, 't', 't');
INSERT INTO "public"."Class" ("class_id", "subject_id", "professor_name", "class_name", "max_capacity", "current_capacity", "term", "year", "status", "isEnrolling") VALUES
(563815, 526007, 'Bùi Công Danh', 'ĐHKTPM16A', 100, 0, 2, 2021, 't', 't');
INSERT INTO "public"."Class" ("class_id", "subject_id", "professor_name", "class_name", "max_capacity", "current_capacity", "term", "year", "status", "isEnrolling") VALUES
(961552, 235767, 'Võ Văn Hải', 'ĐHKTPM15A', 100, 0, 1, 2021, 't', 't');
INSERT INTO "public"."Class" ("class_id", "subject_id", "professor_name", "class_name", "max_capacity", "current_capacity", "term", "year", "status", "isEnrolling") VALUES
(942445, 227801, 'Bùi Công Danh', 'ĐHKTPM15A', 100, 1, 1, 2021, 't', 't'),
(471301, 526007, 'Bùi Công Danh', 'ĐHKTPM16A', 100, 1, 2, 2021, 't', 't'),
(784880, 304582, 'Võ văn A', 'ĐHKTPM15A', 100, 0, 2, 2022, 't', 't'),
(782584, 806936, 'Võ Văn Hải', 'ĐHKTPM15A', 100, 1, 1, 2021, 't', 'f'),
(281577, 806936, 'Võ Văn Hải', 'ĐHKTPM15A', 100, 0, 2, 2021, 't', 't'),
(489597, 806936, 'Võ Văn Hải', 'ĐHKTPM15A', 100, 0, 2, 2021, 't', 't'),
(5979308, 172283, 'Châu Thị Bảo Hà', 'ĐHKTPM16A', 100, 0, 2, 2021, 't', 't'),
(244607, 239405, 'Ngô Quốc Nhàn', 'ĐHTH16E', 100, 0, 1, 2021, 't', 't'),
(8623095, 843452, 'Huỳnh Văn Giàu', 'ĐHTH16E', 100, 0, 1, 2021, 't', 't'),
(6856970, 158095, 'Đồng Phú Hảo', 'ĐHTH16E', 100, 0, 1, 2021, 't', 't'),
(3993293, 361512, 'Đoàn Văn Thắng', 'ĐHTH16E', 100, 0, 1, 2022, 't', 't'),
(6905833, 640361, 'Phạm Kim Ngân', 'ĐHQT16A', 100, 0, 2, 2021, 't', 't'),
(3624564, 669904, 'Huỳnh Thị Mai', 'ĐHMK16A', 100, 0, 2, 2021, 't', 't'),
(5297429, 789571, 'Đỗ Thị Ngoan', 'ĐHQT16D', 100, 0, 2, 2021, 't', 't'),
(970474, 806092, 'Huỳnh Thị Thủy', 'ĐHKT16D', 100, 0, 2, 2021, 't', 't'),
(7065374, 894143, 'Nguyễn Thị Hà', 'ĐHKT16D', 100, 0, 2, 2021, 't', 't'),
(5484708, 966490, 'Nguyễn Thanh Tùng', 'ĐHTH16D', 100, 0, 2, 2021, 't', 't');

INSERT INTO "public"."ClassDetail" ("class_detail_id", "class_id", "study_time", "group_practice", "room_name", "towner") VALUES
(2, 281577, 'LT - Thứ 5(T10 -> T12)', 2, 'A1-101', 'A1');
INSERT INTO "public"."ClassDetail" ("class_detail_id", "class_id", "study_time", "group_practice", "room_name", "towner") VALUES
(3, 281577, 'LT - Thứ 6(T10 -> T12)', 3, 'A1-102', 'A1');
INSERT INTO "public"."ClassDetail" ("class_detail_id", "class_id", "study_time", "group_practice", "room_name", "towner") VALUES
(4, 281577, 'LT - Thứ 7(T10 -> T12)', 4, 'A1-103', 'A1');
INSERT INTO "public"."ClassDetail" ("class_detail_id", "class_id", "study_time", "group_practice", "room_name", "towner") VALUES
(5, 489597, 'LT - Thứ 5(T10 -> T12)', 2, 'A1-101', 'A1'),
(6, 489597, 'LT - Thứ 6(T10 -> T12)', 3, 'A1-102', 'A1'),
(7, 489597, 'LT - Thứ 7(T10 -> T12)', 4, 'A1-103', 'A1'),
(4204735, 5979308, 'LT - Thứ 2(T1 -> T3)', 3, 'A1-101', 'A1'),
(2287263, 5979308, 'TH - Thứ 6(T7 -> T9)', 1, 'H3-01', 'H3'),
(6754771, 5979308, 'TH - Thứ 7(T1 -> T3)', 2, 'H3-01', 'H3'),
(3169362, 244607, 'LT - Thứ 2(T4 -> T6)', 0, 'X13-01', 'X13'),
(203519, 8623095, 'LT - Thứ 3(T1 -> T3)', 0, 'A3-306', 'A3'),
(683005, 6856970, 'LT - Thứ 4(T1 -> T3)', 0, 'A4-406', 'A4'),
(2323272, 3993293, 'LT - Thứ 5(T1 -> T3)', 0, 'A4-406', 'A4'),
(7362101, 3993293, 'TH - Thứ 5(T4 -> T6)', 1, 'H4-401', 'H4'),
(3791212, 3993293, 'TH - Thứ 6(T4 -> T6)', 2, 'H4-401', 'H4'),
(1543334, 3624564, 'LT - Thứ 3(T1 -> T3)', 0, 'A3-301', 'A3'),
(8634250, 5297429, 'LT - Thứ 2(T4 -> T6)', NULL, 'A2-202', 'A2'),
(1445508, 970474, 'LT - Thứ 2(T10 -> T12)', NULL, 'A1-102', 'A1'),
(8643133, 7065374, 'LT - Thứ 5(T10 -> T12)', NULL, 'A1-102', 'A1'),
(4337169, 5484708, 'LT - Thứ 5(T4 -> T6)', NULL, 'V6-602', 'V6'),
(5079143, 6905833, 'LT - Thứ 7(T4 -> T6)', NULL, 'A4-401', 'A4');



INSERT INTO "public"."Enrollment" ("enrollment_id", "student_id", "class_id", "status", "registration_date", "confirmation_status", "class_detail_id") VALUES
(6, 18, 489597, 'APPROVED', '2024-05-04 14:36:16.757', 'f', 5);
INSERT INTO "public"."Enrollment" ("enrollment_id", "student_id", "class_id", "status", "registration_date", "confirmation_status", "class_detail_id") VALUES
(7, 18, 281577, 'APPROVED', '2024-05-04 14:50:33.135', 'f', 2);
INSERT INTO "public"."Enrollment" ("enrollment_id", "student_id", "class_id", "status", "registration_date", "confirmation_status", "class_detail_id") VALUES
(2, 18, 5979308, 'APPROVED', '2024-05-14 02:12:43.37', 'f', 6754771);
INSERT INTO "public"."Enrollment" ("enrollment_id", "student_id", "class_id", "status", "registration_date", "confirmation_status", "class_detail_id") VALUES
(1, 18, 6856970, 'APPROVED', '2024-05-08 10:01:08.611', 't', 683005);

INSERT INTO "public"."Grade" ("grade_id", "student_id", "subject_id", "digit_score", "letter_score", "midterm", "final", "theory_1", "theory_2", "theory_3", "theory_4", "theory_5", "practice_1", "practice_2", "practice_3", "practice_4", "practice_5") VALUES
(12, 18, 526007, 8, 'B+', 8, 8, 8, 8, 8, NULL, NULL, 8, 10, 8, NULL, NULL);
INSERT INTO "public"."Grade" ("grade_id", "student_id", "subject_id", "digit_score", "letter_score", "midterm", "final", "theory_1", "theory_2", "theory_3", "theory_4", "theory_5", "practice_1", "practice_2", "practice_3", "practice_4", "practice_5") VALUES
(2, 18, 235767, 3, 'F', 3, 3, 3, 3, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."Grade" ("grade_id", "student_id", "subject_id", "digit_score", "letter_score", "midterm", "final", "theory_1", "theory_2", "theory_3", "theory_4", "theory_5", "practice_1", "practice_2", "practice_3", "practice_4", "practice_5") VALUES
(8, 18, 806936, 9, 'A+', 9, 9, 9, 9, 9, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO "public"."Grade" ("grade_id", "student_id", "subject_id", "digit_score", "letter_score", "midterm", "final", "theory_1", "theory_2", "theory_3", "theory_4", "theory_5", "practice_1", "practice_2", "practice_3", "practice_4", "practice_5") VALUES
(1, 18, 227801, 8.6, 'A', 9, 9, 9, 6.5, 9, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(13, 18, 526007, 10, 'F', 10, 10, 10, 10, 10, 10, 10, 10, 10, NULL, NULL, NULL);



INSERT INTO "public"."Schedule" ("schedule_id", "student_id", "class_id", "time") VALUES
(3040872, 18, 489597, '2024-05-22 00:00:00');
INSERT INTO "public"."Schedule" ("schedule_id", "student_id", "class_id", "time") VALUES
(6444118, 18, 281577, '2024-05-23 00:00:00');
INSERT INTO "public"."Schedule" ("schedule_id", "student_id", "class_id", "time") VALUES
(526005, 18, 5979308, '2024-05-22 00:00:00');

