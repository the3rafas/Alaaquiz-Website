import React from "react";
import "./userInfo.css";
import FormBuilder from "form007/dist/FormBuilder";

const UserInfo = ({ editData, handelUser }) => {
  console.log("edit data");
  console.log(editData);
  return (
    <div>
      <FormBuilder
        rows={[
          [
            {
              name: "name",
              label: "أسم الطالب",
              type: "text",
              value: "",
              placeHolder: "أسم الطالب",
              size: "small",
              helperText: "برجاء ادخال اسم الطالب",
              variant: "outlined",
              labelMargin: "0 0 0rem 0",
              registerObject: {
                required: true,
              },
              fullWidth: false,
              xs: 12,
              md: 12,
              enableLabel: false,
            },
            {
              name: "userId",
              label: "رقم دخول الطالب",
              type: "text",
              value: "",
              placeHolder: "رقم الدخول",
              size: "small",
              helperText: "برجاء ادخال رقم الدخول",
              variant: "outlined",
              labelMargin: "0 0 0rem 0",
              registerObject: {
                required: true,
              },
              fullWidth: false,
              xs: 12,
              md: 12,
              enableLabel: false,
            },
            {
              name: "subject",
              label: "المادة",
              type: "select",
              rows: [
                { value: "رياضيات", label: "رياضيات" },
                { value: "لغة عربية", label: "لغة عربية" },
                { value: "لغة انجليزية", label: "لغة انجليزية" },
                { value: "لغة فرنسية", label: "لغة فرنسية" },
                { value: "فيزياء", label: "فيزياء" },
                { value: "كيمياء", label: "كيمياء" },
              ],
              value: "",
              placeHolder: "المادة",
              size: "small",
              helperText: "لا تترك الحقل فارغ",
              variant: "outlined",
              labelMargin: "0 0 0 0",
              registerObject: {
                required: true,
              },
              fullWidth: false,
              xs: 12,
              md: 12,
              enableLabel: false,
            },
            {
              name: "class",
              label: "الصف",
              type: "select",
              rows: [
                { value: "الأول الأعدادي", label: "الأول الأعدادي" },
                { value: "الثاني الأعدادي", label: "الثاني الأعدادي" },
                { value: "الثالث الأعدادي", label: "الثالث الأعدادي" },
                { value: "الأول الثانوي", label: "الأول الثانوي" },
                { value: "الثاني الثانوي", label: "الثاني الثانوي" },
                { value: "الثالث الثانوي", label: "الثالث الثانوي" },
              ],
              value: "",
              placeHolder: "الصف ",
              size: "small",
              helperText: "لا تترك الحقل فارغ",
              variant: "outlined",
              labelMargin: "0 0 0 0",
              registerObject: {
                required: true,
              },
              fullWidth: false,
              xs: 12,
              md: 12,
              enableLabel: false,
            },
          ],
        ]}
        values={editData}
        dir="rtl"
        submitButtonText="حفظ"
        color={"#f00"}
        submitHandler={(values) => {
          handelUser(values);
        }}
        noSubmit={false}
        grid={{ xs: 12, md: 6 }}
        width={"100%"}
        spacing={0.5}
        margin={"0rem 0rem 0.5rem 0rem"}
      />
    </div>
  );
};
export default UserInfo;
