<?php
if (!defined('ABSPATH')) {
    exit;
}

class MonPsy_Contact_Widget extends \Elementor\Widget_Base {
    public function get_name() {
        return 'monpsy_contact';
    }

    public function get_title() {
        return esc_html__('MonPsy Contact', 'monpsy');
    }

    public function get_icon() {
        return 'eicon-form-horizontal';
    }

    public function get_categories() {
        return ['monpsy-elements'];
    }

    protected function register_controls() {
        $this->start_controls_section(
            'content_section',
            [
                'label' => esc_html__('Content', 'monpsy'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'section_title',
            [
                'label' => esc_html__('Section Title', 'monpsy'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Contactez-nous', 'monpsy'),
            ]
        );

        $this->add_control(
            'section_subtitle',
            [
                'label' => esc_html__('Section Subtitle', 'monpsy'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Une question ? N\'hésitez pas à nous contacter.', 'monpsy'),
            ]
        );

        $this->add_control(
            'contact_email',
            [
                'label' => esc_html__('Contact Email', 'monpsy'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => 'contact@monpsy.net.ma',
            ]
        );

        $this->add_control(
            'contact_phone',
            [
                'label' => esc_html__('Contact Phone', 'monpsy'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => '+212 123 456 789',
            ]
        );

        $this->add_control(
            'contact_address',
            [
                'label' => esc_html__('Address', 'monpsy'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => '123 Rue Example, Ville, Maroc',
            ]
        );

        $this->add_control(
            'map_embed_url',
            [
                'label' => esc_html__('Google Maps Embed URL', 'monpsy'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.846447471236!2d-7.6192!3d33.5731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIzLjIiTiA3wrAzNycwOS4xIlc!5e0!3m2!1sfr!2sma!4v1620000000000!5m2!1sfr!2sma',
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        $is_rtl = is_rtl();
        ?>
        <div class="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div class="mx-auto max-w-xl lg:max-w-4xl">
                <div class="text-center <?php echo $is_rtl ? 'rtl' : ''; ?>">
                    <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        <?php echo esc_html($settings['section_title']); ?>
                    </h2>
                    <p class="mt-2 text-lg leading-8 text-gray-600">
                        <?php echo esc_html($settings['section_subtitle']); ?>
                    </p>
                </div>

                <div class="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 <?php echo $is_rtl ? 'rtl' : ''; ?>">
                    <!-- Contact Form -->
                    <div class="bg-white px-6 py-8 sm:p-8 rounded-lg shadow-lg">
                        <?php echo do_shortcode('[contact-form-7 id="contact-form"]'); ?>
                    </div>

                    <!-- Contact Info -->
                    <div class="space-y-8">
                        <div class="flex gap-4 <?php echo $is_rtl ? 'flex-row-reverse' : ''; ?>">
                            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                                <i class="fas fa-map-marker-alt text-white"></i>
                            </div>
                            <div>
                                <h3 class="text-base font-semibold leading-7 text-gray-900"><?php echo esc_html__('Adresse', 'monpsy'); ?></h3>
                                <p class="mt-2 leading-7 text-gray-600"><?php echo esc_html($settings['contact_address']); ?></p>
                            </div>
                        </div>

                        <div class="flex gap-4 <?php echo $is_rtl ? 'flex-row-reverse' : ''; ?>">
                            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                                <i class="fas fa-phone text-white"></i>
                            </div>
                            <div>
                                <h3 class="text-base font-semibold leading-7 text-gray-900"><?php echo esc_html__('Téléphone', 'monpsy'); ?></h3>
                                <p class="mt-2 leading-7 text-gray-600"><?php echo esc_html($settings['contact_phone']); ?></p>
                            </div>
                        </div>

                        <div class="flex gap-4 <?php echo $is_rtl ? 'flex-row-reverse' : ''; ?>">
                            <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
                                <i class="fas fa-envelope text-white"></i>
                            </div>
                            <div>
                                <h3 class="text-base font-semibold leading-7 text-gray-900"><?php echo esc_html__('Email', 'monpsy'); ?></h3>
                                <p class="mt-2 leading-7 text-gray-600"><?php echo esc_html($settings['contact_email']); ?></p>
                            </div>
                        </div>

                        <div class="mt-8 pt-8 border-t border-gray-200">
                            <iframe
                                title="<?php echo esc_attr__('Location Map', 'monpsy'); ?>"
                                src="<?php echo esc_url($settings['map_embed_url']); ?>"
                                width="100%"
                                height="300"
                                style="border:0;"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                class="rounded-lg shadow-md">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <?php
    }
}