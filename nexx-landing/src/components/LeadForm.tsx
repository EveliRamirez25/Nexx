import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  CATEGORY_IDS,
  LOB_MAP,
  OTHER_VALUE,
  type CategoryId,
} from "../businessCatalog";

type TienePoliza = "Si" | "No";

type LeadFormData = {
  nombre: string;
  apellido: string;
  phone: string;
  email: string;
  zip: string;

  tipoSeguro: string;
  otherTipoSeguro: string;

  category: string;
  otherCategory: string;

  lineOfBusiness: string;
  otherLineOfBusiness: string;

  tienePoliza: TienePoliza;
  compania: string;
};

type FormErrors = Partial<Record<keyof LeadFormData, string>>;

const N8N_WEBHOOK_URL = "https://tu-webhook-n8n.aqui/webhook";

export default function LeadForm() {
  const { t, i18n } = useTranslation();

  const [form, setForm] = useState<LeadFormData>({
    nombre: "",
    apellido: "",
    phone: "",
    email: "",
    zip: "",

    tipoSeguro: "",
    otherTipoSeguro: "",

    category: "",
    otherCategory: "",

    lineOfBusiness: "",
    otherLineOfBusiness: "",

    tienePoliza: "No",
    compania: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [sending, setSending] = useState(false);

  const lobOptions = useMemo(() => {
    if (!form.category || form.category === OTHER_VALUE) return [];
    return LOB_MAP[form.category as CategoryId] ?? [];
  }, [form.category]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setErrors((prev) => ({ ...prev, [name]: undefined }));

    setForm((prev) => {
      if (name === "tipoSeguro") {
        return {
          ...prev,
          tipoSeguro: value,
          otherTipoSeguro: value === OTHER_VALUE ? prev.otherTipoSeguro : "",
        };
      }

      if (name === "category") {
        return {
          ...prev,
          category: value,
          otherCategory: value === OTHER_VALUE ? prev.otherCategory : "",
          lineOfBusiness: "",
          otherLineOfBusiness: "",
        };
      }

      if (name === "lineOfBusiness") {
        return {
          ...prev,
          lineOfBusiness: value,
          otherLineOfBusiness:
            value === OTHER_VALUE ? prev.otherLineOfBusiness : "",
        };
      }

      return { ...prev, [name]: value };
    });
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (form.tipoSeguro === OTHER_VALUE && !form.otherTipoSeguro.trim()) {
      newErrors.otherTipoSeguro = t("form.typeOtherRequired");
    }

    if (form.category === OTHER_VALUE && !form.otherCategory.trim()) {
      newErrors.otherCategory = t("form.categoryOtherRequired");
    }

    if (
      form.lineOfBusiness === OTHER_VALUE &&
      !form.otherLineOfBusiness.trim()
    ) {
      newErrors.otherLineOfBusiness = t("form.lobOtherRequired");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSending(true);

    try {
      const payload = {
        ...form,

        tipoSeguroLabel:
          form.tipoSeguro === OTHER_VALUE
            ? form.otherTipoSeguro.trim()
            : form.tipoSeguro,

        categoryLabel:
          form.category === OTHER_VALUE
            ? form.otherCategory.trim()
            : t(`business.categories.${form.category}`, {
                lng: i18n.language,
              }),

        lineOfBusinessLabel:
          form.lineOfBusiness === OTHER_VALUE
            ? form.otherLineOfBusiness.trim()
            : t(`business.lobs.${form.lineOfBusiness}`, {
                lng: i18n.language,
              }),
      };

      await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setForm({
        nombre: "",
        apellido: "",
        phone: "",
        email: "",
        zip: "",
        tipoSeguro: "",
        otherTipoSeguro: "",
        category: "",
        otherCategory: "",
        lineOfBusiness: "",
        otherLineOfBusiness: "",
        tienePoliza: "No",
        compania: "",
      });

      setErrors({});
      alert(t("form.success"));
    } catch (err) {
      console.error(err);
      alert(t("form.error"));
    } finally {
      setSending(false);
    }
  };

  const ErrorMsg = ({ msg }: { msg?: string }) =>
    msg ? <span className="form-error">{msg}</span> : null;

  return (
    <section className="lead-form">
      <h2>{t("form.title")}</h2>
      <p>{t("form.subtitle")}</p>

      <form className="lead-form__body" onSubmit={handleSubmit}>
        {/* Nombre / Apellido */}
        <div className="form-row">
          <div className="field">
            <label>{t("form.firstName")}</label>
            <input name="nombre" value={form.nombre} onChange={handleChange} />
          </div>

          <div className="field">
            <label>{t("form.lastName")}</label>
            <input name="apellido" value={form.apellido} onChange={handleChange} />
          </div>
        </div>

        {/* Tel / Email */}
        <div className="form-row">
          <div className="field">
            <label>{t("form.phone")}</label>
            <input name="phone" value={form.phone} onChange={handleChange} />
          </div>

          <div className="field">
            <label>{t("form.email")}</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* ZIP */}
        <div className="field">
          <label>{t("form.zip")}</label>
          <input name="zip" value={form.zip} onChange={handleChange} />
        </div>

        {/* Tipo de seguro */}
        <div className="field">
          <label>{t("form.typeLabel")}</label>
          <select name="tipoSeguro" value={form.tipoSeguro} onChange={handleChange}>
            <option value="">{t("form.typePlaceholder")}</option>
            <option value="Auto">Auto</option>
            <option value="Property">Property</option>
            <option value="Boat">Boat</option>
            <option value="Commercial">Commercial</option>
            <option value={OTHER_VALUE}>{t("form.typeOther")}</option>
          </select>

          {form.tipoSeguro === OTHER_VALUE && (
            <>
              <input
                name="otherTipoSeguro"
                value={form.otherTipoSeguro}
                onChange={handleChange}
                placeholder={t("form.typeOtherPlaceholder")}
              />
              <ErrorMsg msg={errors.otherTipoSeguro} />
            </>
          )}
        </div>

        {/* Categoría / Giro */}
        <div className="form-row">
          <div className="field">
            <label>{t("form.categoryLabel")}</label>
            <select name="category" value={form.category} onChange={handleChange}>
              <option value="">{t("form.categoryPlaceholder")}</option>
              {CATEGORY_IDS.map((cat) => (
                <option key={cat} value={cat}>
                  {t(`business.categories.${cat}`)}
                </option>
              ))}
              <option value={OTHER_VALUE}>{t("form.categoryOther")}</option>
            </select>

            {form.category === OTHER_VALUE && (
              <>
                <input
                  name="otherCategory"
                  value={form.otherCategory}
                  onChange={handleChange}
                  placeholder={t("form.categoryOtherPlaceholder")}
                />
                <ErrorMsg msg={errors.otherCategory} />
              </>
            )}
          </div>

          <div className="field">
            <label>{t("form.lobLabel")}</label>
            <select
              name="lineOfBusiness"
              value={form.lineOfBusiness}
              onChange={handleChange}
              disabled={!form.category || form.category === OTHER_VALUE}
            >
              <option value="">
                {t("form.lobPlaceholderDisabled")}
              </option>

              {lobOptions.map((lob) => (
                <option key={lob} value={lob}>
                  {t(`business.lobs.${lob}`)}
                </option>
              ))}

              <option value={OTHER_VALUE}>{t("form.lobOther")}</option>
            </select>

            {form.lineOfBusiness === OTHER_VALUE && (
              <>
                <input
                  name="otherLineOfBusiness"
                  value={form.otherLineOfBusiness}
                  onChange={handleChange}
                  placeholder={t("form.lobOtherPlaceholder")}
                />
                <ErrorMsg msg={errors.otherLineOfBusiness} />
              </>
            )}
          </div>
        </div>

        {/* Póliza / Compañía */}
        <div className="form-row">
          <div className="field">
            <label>{t("form.hasPolicy")}</label>
            <select
              name="tienePoliza"
              value={form.tienePoliza}
              onChange={handleChange}
            >
              <option value="No">No</option>
              <option value="Si">Sí</option>
            </select>
          </div>

          <div className="field">
            <label>{t("form.company")}</label>
            <input
              name="compania"
              value={form.compania}
              onChange={handleChange}
            />
          </div>
        </div>

        <button type="submit" className="primary-btn" disabled={sending}>
          {sending ? t("form.sending") : t("form.send")}
        </button>
      </form>
    </section>
  );
}
