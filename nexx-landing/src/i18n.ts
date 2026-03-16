// src/i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        coverages: "Coverages",
        contact: "Contact",
        location: "Location",

        // accesibilidad (por si lo usas en Navbar)
        ariaHome: "Go to home",
        ariaMain: "Main navigation",
        ariaMobile: "Mobile navigation",
        ariaOpenMenu: "Open menu",
        ariaCloseMenu: "Close menu",
        langToggle: "ES / EN",
      },

      hero: {
        kicker: "Insurance agency based in Florida, USA",
        title: "Welcome to Nexx Insurance",
        description: "A move from risk to a safer place.",
        cta: "Request a consultation",
        card: {
          title: "HOW WE WORK",
          main:
            "We represent continuity, limitless protection, and constant connection with our clients.",
          step1: "Tell us what you need to insure.",
          step2: "We design a solution tailored to you.",
          step3: "We support you throughout the life of your policy.",
          note: "More than an agency, we’re your trusted partner.",
          badges: {
            coverage50: "Coverage available in all 50 states",
            bilingual: "Bilingual support (EN / ES)",
          },
        },
      },

      about: {
        kicker: "About us",
        title: "An insurance partner built for your business.",
        body1:
          "Nexx Insurance blends local expertise in Florida with modern digital tools to quote, bind and service your policies without friction.",
        body2:
          "We work with specialized commercial carriers to build clear, competitive coverage aligned with your actual risk profile.",
        highlightTitle: "Why work with Nexx",
        point1: "Access to multiple carriers through a single advisor.",
        point2: "Bilingual support for owners and decision makers.",
        point3: "Digital processes, with human guidance at every step.",
      },

      coverages: {
        title: "Choose your primary coverage",
        thimble: "Thimble Insurance",
        thimble_sub: "On-demand liability for small businesses",
        coterie: "Coterie Insurance",
        coterie_sub: "Fast commercial insurance for modern businesses",
        rocket: "Rocket MGA",
        rocket_sub: "Smart underwriting for growing companies",
        cta: "Get a quote",
      },

      services: {
        heading: "And then some.",
        cta: "Get a quote",

        auto: {
          label: "Auto",
          title: "Auto Insurance",
          text:
            "From quick errands to long road trips, we match you with auto coverage that protects you, your passengers, and your car at the right price.",
        },
        home: {
          label: "Home",
          title: "Home Insurance",
          text:
            "Protect your house, belongings, and liability with home coverage that’s built for Florida weather, condos, and single-family homes alike.",
        },
        flood: {
          label: "Flood",
          title: "Flood Insurance",
          text:
            "Get flood coverage designed for Florida properties and high-risk areas—so you’re ready when water damage strikes.",
        },
        business: {
          label: "Business",
          title: "Business Insurance",
          text:
            "From general liability to property and equipment, we help protect your business so a claim doesn’t stop your operations.",
        },

        boat: {
          label: "Boat",
          title: "Boat Insurance",
          text:
            "Stay confident on the water with protection for your boat, trailer, and gear—at the marina, on the road, and offshore.",
          options: {
            charter: {
              title: "Charter",
              text:
                "Coverage for charter operators (commercial use). Protect your vessel, passengers, and liability while running trips or rentals.",
              cta: "Quote Charter",
            },
            personal: {
              title: "Personal Boat",
              text:
                "For personal or recreational use. Protect your boat, trailer, and gear for weekends, family outings, and seasonal storage.",
              cta: "Quote Personal Boat",
            },
          },
        },

        renters: {
          label: "Renters",
          title: "Renters Insurance",
          text:
            "Protect what you own inside your rental with coverage for personal property, additional living expenses, and personal liability.",
        },
        pet: {
          label: "Pet",
          title: "Pet Insurance",
          text:
            "Help cover vet bills, accidents, and unexpected treatments so your pets can get the care they need without surprise costs.",
        },
      },

      ctaMap: {
        eyebrow: "Let’s talk",
        title: "Ready to review your coverage options?",
        text:
          "Tell us a bit about your business and we’ll walk you through auto, property and commercial insurance tailored to your risk profile.",
        button: "Schedule a call",
        note: "We can meet online or at our office, whatever works best for you.",
      },

      form: {
        title: "Prefer that we contact you?",
        subtitle:
          "Leave your information and a Nexx Insurance advisor will call you.",

        firstName: "First name",
        lastName: "Last name",
        phone: "Phone",
        email: "Email",
        zip: "Zip code",

        typeLabel: "Type of insurance you are interested in",
        typePlaceholder: "Select an option",
        typeOther: "Other (please specify)",
        typeOtherPlaceholder: "Write your type of insurance",
        typeOtherRequired: "Please specify the type of insurance.",

        hasPolicy: "Do you already have a policy?",
        company: "With which company?",
        companyPlaceholder: "Thimble, Coterie, Rocket MGA",

        categoryLabel: "Business category",
        categoryPlaceholder: "Select a category",
        categoryOther: "Other (please specify)",
        categoryOtherPlaceholder: "Write your business category",
        categoryOtherRequired: "Please specify your business category.",

        lobLabel: "Line of business",
        lobPlaceholder: "Select a line of business",
        lobPlaceholderDisabled: "Select category first",
        lobOther: "Other (please specify)",
        lobOtherLabel: "Other (specify)",
        lobOtherPlaceholder: "Write your line of business",
        lobOtherRequired: "Please specify your line of business.",

        send: "Send",
        sending: "Sending...",
        success: "Thank you! We have received your information.",
        error: "There was a problem sending. Please try again later.",
      },

      business: {
        categories: {
          construction_trades: "Construction & Trades",
          manufacturing_fabrication: "Manufacturing & Fabrication",
          retail_storefront: "Retail & Storefront",
          hospitality_food_service: "Hospitality & Food Service",
          real_estate_property: "Real Estate & Property",
          auto_transportation: "Auto & Transportation",
          professional_admin_services: "Professional & Admin Services",
          events_entertainment: "Events & Entertainment",
          healthcare_personal_services: "Healthcare & Personal Services",
          education_childcare: "Education & Childcare",
          technology_telecom: "Technology & Telecom",
          nonprofits_community: "Non-Profits & Community",
          agriculture_environmental: "Agriculture & Environmental",
          marine_watercraft: "Marine & Watercraft",
        },

        // ✅ IMPORTANTE: aquí van TODAS las llaves de tu catálogo.
        // Te dejo completo el bloque (incluye las que ya viste en el dropdown).
        lobs: {
          general_contractor: "General Contractor",
          residential_contractor: "Residential Contractor",
          commercial_contractor: "Commercial Contractor",
          electrician: "Electrician",
          plumber: "Plumber",
          hvac_contractor: "HVAC Contractor",
          roofer: "Roofer",
          mason_concrete_contractor: "Mason / Concrete Contractor",
          framing_contractor: "Framing Contractor",
          drywall_contractor: "Drywall Contractor",
          flooring_installer: "Flooring Installer",
          painter: "Painter",
          carpenter_finish_trim: "Carpenter / Finish Trim",
          glazing_window_door_installer: "Glazing / Window & Door Installer",
          fence_installer: "Fence Installer",
          pool_builder_contractor: "Pool Builder / Contractor",
          landscaper_lawn_service: "Landscaper / Lawn Service",
          tree_trimming_service: "Tree Trimming Service",
          handyman_service: "Handyman Service",
          marine_contractor_dock_builder: "Marine Contractor / Dock Builder",
          solar_panel_installer: "Solar Panel Installer",
          paving_asphalt_contractor: "Paving / Asphalt Contractor",
          demolition_contractor: "Demolition Contractor",
          crane_operator_non_owned_equipment: "Crane Operator (Non-owned Equipment)",

          metal_fabrication_shop: "Metal Fabrication Shop",
          plastics_manufacturing: "Plastics Manufacturing",
          boat_yacht_builder: "Boat / Yacht Builder",
          furniture_manufacturer: "Furniture Manufacturer",
          electronics_manufacturer: "Electronics Manufacturer",
          apparel_textile_manufacturer: "Apparel / Textile Manufacturer",
          food_beverage_manufacturer: "Food & Beverage Manufacturer",

          grocery_store_supermarket: "Grocery Store / Supermarket",
          convenience_store: "Convenience Store",
          liquor_store: "Liquor Store",
          clothing_boutique_store: "Clothing / Boutique Store",
          shoe_store: "Shoe Store",
          jewelry_store: "Jewelry Store",
          furniture_store: "Furniture Store",
          appliance_store: "Appliance Store",
          auto_parts_store: "Auto Parts Store",
          vape_tobacco_shop: "Vape / Tobacco Shop",
          marine_supply_store: "Marine Supply Store",
          hardware_store: "Hardware Store",

          restaurant_full_service: "Restaurant - Full Service",
          restaurant_fast_casual_fast_food: "Restaurant - Fast Casual / Fast Food",
          cafe_coffee_shop: "Café / Coffee Shop",
          bakery: "Bakery",
          catering_company: "Catering Company",
          food_truck: "Food Truck",
          bar_tavern: "Bar / Tavern",
          nightclub_lounge: "Nightclub / Lounge",
          hotel_motel: "Hotel / Motel",
          resort: "Resort",
          bed_breakfast_inn: "Bed & Breakfast / Inn",
          short_term_rental_operator: "Short-Term Rental Operator (Airbnb / VRBO)",

          residential_property_manager: "Residential Property Manager",
          commercial_property_manager: "Commercial Property Manager",
          apartment_building_owner_landlord: "Apartment Building Owner / Landlord",
          shopping_center_plaza_owner: "Shopping Center / Plaza Owner",
          office_building_owner: "Office Building Owner",
          warehouse_industrial_property_owner: "Warehouse / Industrial Property Owner",
          self_storage_facility: "Self-Storage Facility",
          hoa_condominium_association: "HOA / Condominium Association",
          real_estate_investment_firm: "Real Estate Investment Firm",

          auto_dealer_new: "Auto Dealer - New",
          auto_dealer_used: "Auto Dealer - Used",
          auto_repair_shop: "Auto Repair Shop",
          auto_body_collision_shop: "Auto Body / Collision Shop",
          tire_shop: "Tire Shop",
          mobile_mechanic: "Mobile Mechanic",
          tow_truck_company: "Tow Truck Company",
          trucking_company_motor_carrier: "Trucking Company / Motor Carrier",
          courier_delivery_service: "Courier / Delivery Service",
          non_emergency_medical_transportation: "Non-Emergency Medical Transportation",
          driving_school: "Driving School",

          accounting_firm_cpa: "Accounting Firm / CPA",
          consulting_firm: "Consulting Firm",
          insurance_agency_broker: "Insurance Agency / Broker",
          real_estate_agency: "Real Estate Agency",
          law_firm: "Law Firm",
          marketing_advertising_agency: "Marketing / Advertising Agency",
          staffing_employment_agency: "Staffing / Employment Agency",
          notary_service: "Notary Service",
          property_inspection_company: "Property Inspection Company",

          event_planner_coordinator: "Event Planner / Coordinator",
          wedding_planner: "Wedding Planner",
          dj_entertainment_company: "DJ / Entertainment Company",
          banquet_hall_event_venue: "Banquet Hall / Event Venue",
          trade_show_expo_organizer: "Trade Show / Expo Organizer",
          festival_fair_organizer: "Festival / Fair Organizer",
          sports_league_tournament_organizer: "Sports League / Tournament Organizer",
          theater_performing_arts_venue: "Theater / Performing Arts Venue",
          boat_show_organizer: "Boat Show Organizer",

          medical_clinic_doctors_office: "Medical Clinic / Doctor's Office",
          dentist_office: "Dentist Office",
          chiropractic_clinic: "Chiropractic Clinic",
          physical_therapy_clinic: "Physical Therapy Clinic",
          home_health_care_agency: "Home Health Care Agency",
          massage_therapy_clinic: "Massage Therapy Clinic",
          gym_fitness_center: "Gym / Fitness Center",
          yoga_pilates_studio: "Yoga / Pilates Studio",
          beauty_hair_salon: "Beauty Salon / Hair Salon",
          barbershop: "Barbershop",
          nail_salon: "Nail Salon",
          tattoo_piercing_studio: "Tattoo / Piercing Studio",
          spa_med_spa: "Spa / Med Spa",

          daycare_center: "Daycare Center",
          preschool: "Preschool",
          private_school: "Private School",
          tutoring_center: "Tutoring Center",
          after_school_program: "After-School Program",
          summer_camp_day_or_overnight: "Summer Camp (Day or Overnight)",
          vocational_trade_school: "Vocational / Trade School",

          // ✅ los que te salían en screenshot (Tech & Telecom)
          it_consulting_firm: "IT Consulting Firm",
          software_development_company: "Software Development Company",
          managed_service_provider_msp: "Managed Service Provider (MSP)",
          data_center_server_hosting: "Data Center / Server Hosting",
          security_alarm_installation_company: "Security / Alarm Installation Company",
          telecom_installation_contractor: "Telecom Installation Contractor",

          church_religious_organization: "Church / Religious Organization",
          charitable_foundation: "Charitable Foundation",
          community_center: "Community Center",
          youth_organization_club: "Youth Organization / Club",
          advocacy_support_organization: "Advocacy / Support Organization",

          farm_ranch_operation: "Farm / Ranch Operation",
          crop_producer: "Crop Producer",
          irrigation_contractor: "Irrigation Contractor",
          pest_control_company: "Pest Control Company",
          environmental_consulting_firm: "Environmental Consulting Firm",
          landscaping_nursery_garden_center: "Landscaping Nursery / Garden Center",

          marina_dockage_facility: "Marina / Dockage Facility",
          boatyard_marine_repair_facility: "Boatyard / Marine Repair Facility",
          marine_mechanic_mobile_or_shop: "Marine Mechanic (Mobile or Shop)",
          boat_detailing_company: "Boat Detailing Company",
          boat_yacht_broker: "Boat / Yacht Broker",
          boat_rental_company: "Boat Rental Company",
          jet_ski_pwc_rental_company: "Jet Ski / PWC Rental Company",
          charter_boat_operator: "Charter Boat Operator",
          marine_towing_salvage_company: "Marine Towing / Salvage Company",
          marine_fueling_dock_fuel_service: "Marine Fueling / Dock Fuel Service",
        },
      },
    },
  },

  es: {
    translation: {
      nav: {
        home: "Home",
        about: "Sobre nosotros",
        coverages: "Coberturas",
        contact: "Contacto",
        location: "Ubicación",

        ariaHome: "Ir al inicio",
        ariaMain: "Navegación principal",
        ariaMobile: "Navegación móvil",
        ariaOpenMenu: "Abrir menú",
        ariaCloseMenu: "Cerrar menú",
        langToggle: "ES / EN",
      },

      hero: {
        kicker: "Agencia de seguros con base en Florida, EE. UU.",
        title: "Bienvenido a Nexx Insurance",
        description: "Un movimiento del riesgo a un lugar más seguro.",
        cta: "Solicitar una consulta",
        card: {
          title: "CÓMO TRABAJAMOS",
          main:
            "Representamos continuidad, protección sin límites y conexión constante con nuestros clientes.",
          step1: "Cuéntanos qué necesitas asegurar.",
          step2: "Diseñamos una solución a tu medida.",
          step3: "Te acompañamos durante toda la vida de la póliza.",
          note: "Más que una agencia, somos tu socio de confianza.",
          badges: {
            coverage50: "Cobertura disponible en los 50 estados",
            bilingual: "Atención bilingüe (EN / ES)",
          },
        },
      },

      about: {
        kicker: "Sobre nosotros",
        title: "Un socio de seguros pensado para tu negocio.",
        body1:
          "Nexx Insurance combina experiencia local en Florida con plataformas digitales modernas para cotizar, emitir y dar seguimiento a tus pólizas sin fricciones.",
        body2:
          "Trabajamos con aseguradoras especializadas en negocios para encontrar coberturas claras, competitivas y alineadas al riesgo real de tu operación.",
        highlightTitle: "Por qué trabajar con Nexx",
        point1: "Acceso a múltiples aseguradoras desde un solo punto de contacto.",
        point2: "Asesoría en español e inglés para dueños y directores.",
        point3: "Procesos digitales, pero con acompañamiento humano.",
      },

      coverages: {
        title: "Elige tu cobertura principal",
        thimble: "Thimble Insurance",
        thimble_sub: "Responsabilidad bajo demanda para negocios pequeños",
        coterie: "Coterie Insurance",
        coterie_sub: "Seguro comercial rápido para negocios modernos",
        rocket: "Rocket MGA",
        rocket_sub: "Suscripción inteligente para empresas en crecimiento",
        cta: "Ir a cotizar",
      },

      services: {
        heading: "Y mucho más.",
        cta: "Obtener cotización",

        auto: {
          label: "Auto",
          title: "Seguro de auto",
          text:
            "Desde las vueltas del día a día hasta los viajes largos, encontramos la cobertura de auto que protege tu vehículo, a tus pasajeros y a tu bolsillo.",
        },
        home: {
          label: "Hogar",
          title: "Seguro de hogar",
          text:
            "Protege tu casa, tus pertenencias y tu responsabilidad civil con una póliza pensada para el clima y la realidad de Florida.",
        },
        flood: {
          label: "Inundación",
          title: "Seguro contra inundación",
          text:
            "Obtén cobertura contra inundación diseñada para propiedades en Florida y zonas de alto riesgo, para estar listo ante daños por agua.",
        },
        business: {
          label: "Negocios",
          title: "Seguro para negocios",
          text:
            "Desde responsabilidad general hasta propiedad y equipo, ayudamos a proteger tu negocio para que un siniestro no detenga tu operación.",
        },

        boat: {
          label: "Barco",
          title: "Seguro de barco",
          text:
            "Navega con tranquilidad con protección para tu embarcación, remolque y equipo, en el muelle, en carretera y en el agua.",
          options: {
            charter: {
              title: "Charter",
              text:
                "Cobertura para operadores de charter (uso comercial). Protege tu embarcación, a los pasajeros y tu responsabilidad civil durante viajes o rentas.",
              cta: "Cotizar Charter",
            },
            personal: {
              title: "Bote personal",
              text:
                "Para uso personal o recreativo. Protege tu bote, remolque y equipo para salidas de fin de semana, familia y almacenamiento de temporada.",
              cta: "Cotizar bote personal",
            },
          },
        },

        renters: {
          label: "Inquilinos",
          title: "Seguro para inquilinos",
          text:
            "Protege lo que tienes dentro de tu renta con cobertura para tus pertenencias, gastos de vivienda temporales y responsabilidad civil.",
        },
        pet: {
          label: "Mascotas",
          title: "Seguro para mascotas",
          text:
            "Ayuda a cubrir visitas al veterinario, accidentes y tratamientos imprevistos para que tus mascotas reciban el cuidado que necesitan.",
        },
      },

      ctaMap: {
        eyebrow: "Hablemos",
        title: "¿Listo para revisar tus opciones de cobertura?",
        text:
          "Cuéntanos un poco sobre tu negocio y te guiamos por las opciones de auto, propiedad y cobertura comercial que mejor se adapten a tu perfil de riesgo.",
        button: "Agendar una llamada",
        note: "Podemos reunirnos en línea o en nuestra oficina, como te sea más cómodo.",
      },

      form: {
        title: "¿Prefieres que te contactemos?",
        subtitle:
          "Déjanos tus datos y un asesor de Nexx Insurance te llamará.",

        firstName: "Nombre",
        lastName: "Apellido",
        phone: "Teléfono",
        email: "Email",
        zip: "Código Postal",

        typeLabel: "Tipo de seguro que está interesado",
        typePlaceholder: "Selecciona una opción",
        typeOther: "Otro (especifica)",
        typeOtherPlaceholder: "Escribe el tipo de seguro",
        typeOtherRequired: "Por favor especifica el tipo de seguro.",

        hasPolicy: "¿Ya tiene una póliza?",
        company: "¿Con qué compañía?",
        companyPlaceholder: "Thimble, Coterie, Rocket MGA",

        categoryLabel: "Categoría de negocio",
        categoryPlaceholder: "Selecciona una categoría",
        categoryOther: "Otro (especifica)",
        categoryOtherPlaceholder: "Escribe la categoría de tu negocio",
        categoryOtherRequired: "Por favor especifica la categoría del negocio.",

        lobLabel: "Giro / actividad",
        lobPlaceholder: "Selecciona una opción",
        lobPlaceholderDisabled: "Primero selecciona una categoría",
        lobOther: "Otro (especifica)",
        lobOtherLabel: "Otro (especifica)",
        lobOtherPlaceholder: "Escribe tu giro / actividad",
        lobOtherRequired: "Por favor especifica tu giro / actividad.",

        send: "Enviar",
        sending: "Enviando...",
        success: "¡Gracias! Hemos recibido tu información.",
        error: "Hubo un problema al enviar. Intenta de nuevo más tarde.",
      },

      business: {
        categories: {
          construction_trades: "Construcción y oficios",
          manufacturing_fabrication: "Manufactura y fabricación",
          retail_storefront: "Comercio minorista y tiendas",
          hospitality_food_service: "Hospitalidad y alimentos",
          real_estate_property: "Bienes raíces y propiedades",
          auto_transportation: "Autos y transporte",
          professional_admin_services: "Servicios profesionales y administrativos",
          events_entertainment: "Eventos y entretenimiento",
          healthcare_personal_services: "Salud y servicios personales",
          education_childcare: "Educación y cuidado infantil",
          technology_telecom: "Tecnología y telecomunicaciones",
          nonprofits_community: "Organizaciones sin fines de lucro y comunidad",
          agriculture_environmental: "Agricultura y medio ambiente",
          marine_watercraft: "Marina y embarcaciones",
        },

        // ✅ mismo set de llaves, traducidas al ES
        lobs: {
          general_contractor: "Contratista general",
          residential_contractor: "Contratista residencial",
          commercial_contractor: "Contratista comercial",
          electrician: "Electricista",
          plumber: "Plomero",
          hvac_contractor: "Contratista de HVAC",
          roofer: "Techador",
          mason_concrete_contractor: "Albañilería / contratista de concreto",
          framing_contractor: "Contratista de estructura (framing)",
          drywall_contractor: "Contratista de tablaroca / drywall",
          flooring_installer: "Instalador de pisos",
          painter: "Pintor",
          carpenter_finish_trim: "Carpintero / acabados",
          glazing_window_door_installer: "Instalador de vidrio / ventanas y puertas",
          fence_installer: "Instalador de cercas",
          pool_builder_contractor: "Constructor / contratista de albercas",
          landscaper_lawn_service: "Jardinería / servicio de césped",
          tree_trimming_service: "Poda de árboles",
          handyman_service: "Servicio de mantenimiento (handyman)",
          marine_contractor_dock_builder: "Contratista marino / constructor de muelles",
          solar_panel_installer: "Instalador de paneles solares",
          paving_asphalt_contractor: "Contratista de pavimento / asfalto",
          demolition_contractor: "Contratista de demolición",
          crane_operator_non_owned_equipment: "Operador de grúa (equipo no propio)",

          metal_fabrication_shop: "Taller de fabricación metálica",
          plastics_manufacturing: "Manufactura de plásticos",
          boat_yacht_builder: "Constructor de botes / yates",
          furniture_manufacturer: "Fabricante de muebles",
          electronics_manufacturer: "Fabricante de electrónicos",
          apparel_textile_manufacturer: "Fabricante textil / ropa",
          food_beverage_manufacturer: "Fabricante de alimentos y bebidas",

          grocery_store_supermarket: "Tienda de abarrotes / supermercado",
          convenience_store: "Tienda de conveniencia",
          liquor_store: "Licorería",
          clothing_boutique_store: "Tienda de ropa / boutique",
          shoe_store: "Zapatería",
          jewelry_store: "Joyería",
          furniture_store: "Mueblería",
          appliance_store: "Tienda de electrodomésticos",
          auto_parts_store: "Refaccionaria",
          vape_tobacco_shop: "Tienda de vapeo / tabaco",
          marine_supply_store: "Tienda de suministros marinos",
          hardware_store: "Ferretería",

          restaurant_full_service: "Restaurante - servicio completo",
          restaurant_fast_casual_fast_food: "Restaurante - fast casual / comida rápida",
          cafe_coffee_shop: "Café / cafetería",
          bakery: "Panadería",
          catering_company: "Servicio de catering",
          food_truck: "Food truck",
          bar_tavern: "Bar / taberna",
          nightclub_lounge: "Antro / lounge",
          hotel_motel: "Hotel / motel",
          resort: "Resort",
          bed_breakfast_inn: "Bed & breakfast / posada",
          short_term_rental_operator: "Operador de renta a corto plazo (Airbnb / VRBO)",

          residential_property_manager: "Administrador de propiedades residenciales",
          commercial_property_manager: "Administrador de propiedades comerciales",
          apartment_building_owner_landlord: "Dueño / arrendador de edificio de departamentos",
          shopping_center_plaza_owner: "Dueño de plaza / centro comercial",
          office_building_owner: "Dueño de edificio de oficinas",
          warehouse_industrial_property_owner: "Dueño de bodega / propiedad industrial",
          self_storage_facility: "Almacenamiento (self-storage)",
          hoa_condominium_association: "Asociación de condóminos (HOA)",
          real_estate_investment_firm: "Firma de inversión inmobiliaria",

          auto_dealer_new: "Agencia de autos - nuevos",
          auto_dealer_used: "Lote de autos - usados",
          auto_repair_shop: "Taller mecánico",
          auto_body_collision_shop: "Taller de hojalatería y pintura / colisión",
          tire_shop: "Llantera",
          mobile_mechanic: "Mecánico a domicilio",
          tow_truck_company: "Servicio de grúa",
          trucking_company_motor_carrier: "Empresa de transporte (trucking) / transportista",
          courier_delivery_service: "Mensajería / entregas",
          non_emergency_medical_transportation: "Transporte médico no urgente",
          driving_school: "Escuela de manejo",

          accounting_firm_cpa: "Despacho contable / CPA",
          consulting_firm: "Firma de consultoría",
          insurance_agency_broker: "Agencia / corredor de seguros",
          real_estate_agency: "Inmobiliaria",
          law_firm: "Despacho jurídico",
          marketing_advertising_agency: "Agencia de marketing / publicidad",
          staffing_employment_agency: "Agencia de reclutamiento / empleo",
          notary_service: "Servicio de notaría",
          property_inspection_company: "Empresa de inspección de propiedades",

          event_planner_coordinator: "Organizador / coordinador de eventos",
          wedding_planner: "Organizador de bodas",
          dj_entertainment_company: "DJ / empresa de entretenimiento",
          banquet_hall_event_venue: "Salón de eventos",
          trade_show_expo_organizer: "Organizador de expo / feria comercial",
          festival_fair_organizer: "Organizador de festival / feria",
          sports_league_tournament_organizer: "Organizador de liga / torneo deportivo",
          theater_performing_arts_venue: "Teatro / foro de artes escénicas",
          boat_show_organizer: "Organizador de boat show",

          medical_clinic_doctors_office: "Clínica médica / consultorio",
          dentist_office: "Consultorio dental",
          chiropractic_clinic: "Clínica quiropráctica",
          physical_therapy_clinic: "Clínica de fisioterapia",
          home_health_care_agency: "Agencia de cuidado en casa",
          massage_therapy_clinic: "Clínica de masajes",
          gym_fitness_center: "Gimnasio / centro fitness",
          yoga_pilates_studio: "Estudio de yoga / pilates",
          beauty_hair_salon: "Salón de belleza / estética",
          barbershop: "Barbería",
          nail_salon: "Salón de uñas",
          tattoo_piercing_studio: "Tatuajes / perforaciones",
          spa_med_spa: "Spa / med spa",

          daycare_center: "Guardería",
          preschool: "Preescolar",
          private_school: "Escuela privada",
          tutoring_center: "Centro de tutorías",
          after_school_program: "Programa extraescolar",
          summer_camp_day_or_overnight: "Campamento de verano (día o con pernocta)",
          vocational_trade_school: "Escuela vocacional / oficios",

          // ✅ los del screenshot (Tech & Telecom)
          it_consulting_firm: "Consultoría de TI",
          software_development_company: "Empresa de desarrollo de software",
          managed_service_provider_msp: "Proveedor de servicios administrados (MSP)",
          data_center_server_hosting: "Centro de datos / hosting de servidores",
          security_alarm_installation_company: "Instalación de seguridad / alarmas",
          telecom_installation_contractor: "Contratista de instalación de telecomunicaciones",

          church_religious_organization: "Iglesia / organización religiosa",
          charitable_foundation: "Fundación benéfica",
          community_center: "Centro comunitario",
          youth_organization_club: "Organización / club juvenil",
          advocacy_support_organization: "Organización de apoyo / defensa (advocacy)",

          farm_ranch_operation: "Operación agrícola / rancho",
          crop_producer: "Productor de cultivos",
          irrigation_contractor: "Contratista de riego",
          pest_control_company: "Control de plagas",
          environmental_consulting_firm: "Consultoría ambiental",
          landscaping_nursery_garden_center: "Vivero / centro de jardinería",

          marina_dockage_facility: "Marina / muelle",
          boatyard_marine_repair_facility: "Astillero / reparación marina",
          marine_mechanic_mobile_or_shop: "Mecánico marino (móvil o taller)",
          boat_detailing_company: "Detallado de embarcaciones",
          boat_yacht_broker: "Broker de botes / yates",
          boat_rental_company: "Renta de botes",
          jet_ski_pwc_rental_company: "Renta de jetski / PWC",
          charter_boat_operator: "Operador de charter",
          marine_towing_salvage_company: "Remolque / salvamento marino",
          marine_fueling_dock_fuel_service: "Servicio de combustible en muelle",
        },
      },
    },
  },
} as const;

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: ["querystring", "localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
