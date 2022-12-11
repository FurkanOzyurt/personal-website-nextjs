import { useTranslation } from "next-i18next";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { FormInput, Textarea } from "@/components/index";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitContactForm } from "@/store/actions/formActions";

const ContactForm: FC = () => {
  const { t } = useTranslation("common");
  const { result, loading } = useSelector((state: any) => state.form);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
  });
  const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    dispatch(submitContactForm(data) as any);
  };
  return (
    <section className="contact-form mb-4 mt-4">
      <h3 className="section-title">
        İletişim Formu
        <span data-number="01" className="divider"></span>
      </h3>
      <div className="card-style">
        <div className="flex flex-wrap -mx-4">
          <form className="w-full " onSubmit={handleSubmit(onSubmit)}>
            {result?.message ? (
              <div
                className={`flex rounded-lg p-4 mx-4 mb-4 text-sm ${
                  result?.error
                    ? "text-red-700 bg-red-100"
                    : "text-green-700 bg-green-100"
                }`}
                role="alert"
              >
                <div> {t(result?.message)}</div>
              </div>
            ) : (
              ""
            )}
            <div className="px-4 md:w-full w-full">
              <FormInput
                placeholder={"Lütfen ad ve soyadınızı giriniz."}
                label="Ad ve Soyad"
                name={"fullName"}
                register={register}
                required={"Bu alan zorunludur."}
                errors={errors}
              />
              <FormInput
                placeholder={"Lütfen mail adresinizi giriniz."}
                label="E-Posta Adresi"
                name={"email"}
                register={register}
                required={"Bu alan zorunludur."}
                errors={errors}
              />
              <Textarea
                placeholder={"Lütfen mesajınızı giriniz."}
                label="Mesajınız"
                name={"message"}
                register={register}
                required={"Bu alan zorunludur."}
                errors={errors}
              />
              <button type="submit" className="fo-button">
                GONDER <ArrowRight size={16} weight="bold" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
